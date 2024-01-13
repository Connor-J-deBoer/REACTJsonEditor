// Coyright © Connor deBoer 2024, All Rights Reserved
import React from 'react';
import FileData from './FileData.js';

export default class FileDropDown extends React.Component
{
    render()
    {
        const handleChange = (event) =>
        {
            // this event.target.files[0] just grabs the first file the user dropped, if they dropped more than one
            const file = event.target.files[0];
            // file reader is gonn allow us to get our JSON string
            const reader = new FileReader();

            // this onload gets called when our reader is done reading, the reason we have the onload before the
            // read as text is because it prevents a possible race condition
            reader.onload = (event) =>
            {
                // this is where the json string gets assigned to the fileContent string
                const fileContent = event.target.result
                FileData.data = JSON.parse(fileContent);
                // just logging so I can see the response
                console.log(FileData.data);
            };
            reader.readAsText(file);
        }

        return(
            <input
                type="file"
                accept="json"
                onChange={(event) => handleChange(event)}
            />
        );
    }
}