// Coyright © Connor deBoer 2024, All Rights Reserved
import { useState } from 'react';
import { Tab, NestingModifier, GetFileData, SetFileData } from './FileData.js';

function Value(updateMarkup, key, value, type, nesting, parents = [])
{
    console.log(`${Tab.repeat(nesting)}${type} ${key} = ${value}`);

    const newMarkup = (
        <div key={`${parents}${key}-${type}-container`} className="input-container" >
            <h1 className="input-title" >{Tab.repeat(nesting * NestingModifier)}</h1>
            <h1 className="input-title" >{key}:</h1>
            <RenderValue value={value} type={type} name={key} parentNames={parents} />
        </div>
    );

    updateMarkup(newMarkup);
}

const RenderValue = ({value, type, name, parentNames}) =>
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

            console.log(current);
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

export default Value;