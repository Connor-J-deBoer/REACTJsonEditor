// Coyright © Connor deBoer 2024, All Rights Reserved

import { Tab, NestingModifier } from './FileData.js';
import CallType from './CallType.js'

function RenderObject (updateMarkup, object, name = "", nesting = 0, parents = [])
{
    if (name !== "") console.log(`${Tab.repeat(nesting)}${name}`);

    const parentArray = [];

    for (let parent of parents)
    {
        parentArray.push(parent);
    }

    updateMarkup(
        <div key={`${name}-container`} className="input-container">
            <h1 className="input-title" >{Tab.repeat(nesting * NestingModifier)}</h1>
            <h1 style={{right: `${nesting * 10}px`}} className="input-title">{name}</h1>
        </div>
        );

    nesting++;

    if (name !== "") parentArray.push(name);

    for (let [key, value] of Object.entries(object))
    {
        CallType(updateMarkup, `${key}`, value, nesting, parentArray);
    }
}

// this guy draws an array by call the split up function, he also increments nesting
function RenderArray (updateMarkup, name, array, nesting, parents = [])
{
    console.log(`${Tab.repeat(nesting)}${name}`);

    const parentArray = [];

    for (let parent of parents)
    {
        parentArray.push(parent);
    }

    updateMarkup(
        <div key={`${name}-container`} className="input-container">
            <h1 className="input-title" >{Tab.repeat(nesting * NestingModifier)}</h1>
            <h1 style={{margineLeft: `${nesting * 10}px`}} className="input-title">{name}</h1>
        </div>
        );

    nesting++;
    
    parentArray.push(name);

    for (let i = 0; i < array.length; ++i)
    {
        CallType(updateMarkup, `${i}`, array[i], nesting, parentArray);
    }
}

export 
{
    RenderObject,
    RenderArray    
};