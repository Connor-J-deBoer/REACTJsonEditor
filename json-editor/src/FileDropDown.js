// Coyright © Connor deBoer 2024, All Rights Reserved

import React from 'react';
import { GetFileData, SetFileData } from './FileData.js';

const fileRead = new CustomEvent('onFileRead');

function FileUploader()
{
    const handleChange = (event) =>
    {
        // this event.target.files[0] just grabs the first file the user dropped, if they dropped more than one
        const file = event.target.files[0];
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

    const checkValue = () =>
    {
        console.log(GetFileData().data);
    }

    return(
        <div>
            <input
                type="file"
                accept="json"
                onChange={(event) => handleChange(event)}
            />

            <button onClick={checkValue}>check Value</button>
        </div>
    );
}

export default FileUploader;