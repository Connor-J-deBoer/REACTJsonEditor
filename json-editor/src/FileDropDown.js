import React from 'react';

export default class FileDropDown extends React.Component
{
    render()
    {
        let fileContent = "empty";
        const handleChange = (event) =>
        {
            return new Promise((resolve, reject) => 
            {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) =>
                {
                fileContent = event.target.result;
                console.log(fileContent);
                resolve(fileContent);
                };
                reader.onerror = (err) =>
                {
                console.log(err);
                reject(err);
                }
                reader.readAsText(file);
            });
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