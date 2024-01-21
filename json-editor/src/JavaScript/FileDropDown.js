// Coyright © Connor deBoer 2024, All Rights Reserved

import React from 'react';
import '../Styles/FileDropDown.css';
import { GetFileData, SetFileData, GetFileName, SetFileName } from './FileData.js';

const fileRead = new CustomEvent('onFileRead');

function FileUploader()
{
    const handleChange = (event) =>
    {
        // this event.target.files[0] just grabs the first file the user dropped, if they dropped more than one
        const file = event.target.files[0];

        // we set the file name here so that when the user wishes to download the finished version they easily can
        SetFileName(file.name);

        // file reader is gonn allow us to get our JSON string
        const reader = new FileReader();

        // this onload gets called when our reader is done reading, the reason we have the onload before the
        // read as text is because it prevents a possible race condition
        reader.onload = (content) =>
        {
            // this is where the json string gets assigned to the fileContent string
            const fileContent = content.target.result;
            SetFileData({"data": JSON.parse(fileContent)});
            document.dispatchEvent(fileRead);
        };
        reader.readAsText(file);
    }

    const download = () =>
    {
        if (GetFileName() === "") return;
        // get the file data, turn it into a json string, package that into a blob, attach a URL, 
        // create the nessary html link, automatically click the link, remove the link and remove the URL
        const jsonString = JSON.stringify(GetFileData().data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob)

        const a = document.createElement('a');
        a.href = url;
        a.download = `${GetFileName()}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(url);
    }

    return(
        <div className='container'>
            <input
                className="input"
                type="file"
                accept="json"
                onChange={(event) => handleChange(event)}
            />

            <button className='cool-button' onClick={download}>Download Modified File</button>
        </div>
    );
}

export default FileUploader;