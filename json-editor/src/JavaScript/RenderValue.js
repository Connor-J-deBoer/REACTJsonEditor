// Coyright © Connor deBoer 2024, All Rights Reserved

// use state lets use have 'reactivity' put simply, when we update a value using 
// the set function that comes with use state it'll also update the ui, which we need lol
import { useState } from 'react';
// grabbing bassically everything from this guy, should probally move Tab and NestingModifier to a 
// seperate file but I'm honestly just trying to move on to the next project right now
import { Tab, NestingModifier, GetFileData, SetFileData } from './FileData.js';

// this guy adds the nesting, title, and input field for the individual values
function DisplayValue(updateMarkup, key, value, type, nesting, parents = [])
{
    const newMarkup = (
        <div key={`${parents}${key}-${type}-container`} className="input-container" >
            <h1 className="input-title" >{Tab.repeat(nesting * NestingModifier)}</h1>
            <h1 className="input-title" >{key}:</h1>
            <RenderInputField value={value} type={type} name={key} parentNames={parents} />
        </div>
    );
    
    // this 'updateMarkup' function does what it says on the tin, it updates the markup so 
    // that it displays the file data correctly on screen
    updateMarkup(newMarkup);
}

// this guy makes sure that the input field is properly connected to the data it's representing, 
// taking into account all the possible nesting
const RenderInputField = ({value, type, name, parentNames}) =>
{
    const [testValue, setTestValue] = useState(value);

    const updateValue = (newValue) =>
    {
        const fileJson = GetFileData();

        if (parentNames.length === 0)
        {
            console.log(name);
            fileJson.data[name] = newValue;
        }
        else
        {
            let current = fileJson.data;
            for (let parent of parentNames)
            {
                current = current[parent];
            }
            current[name] = newValue;
        }
        
        setTestValue(newValue);
        SetFileData(fileJson);
    }

    return(
        <input
            className="input-field"
            type={type}
            value={testValue}
            onChange={event => updateValue(event.target.value)}
        />
    );
}

export default DisplayValue;