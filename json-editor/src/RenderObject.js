// Coyright © Connor deBoer 2024, All Rights Reserved

import { Tab, NestingModifier } from './FileData.js';
import RenderValue from './RenderValue.js'

function RenderObject (updateMarkup, object, name = "", nesting = 0, parents = [])
{
    // this array contains all of the parent names we have so far, it needs to be assigned to 
    // this way because else wise the parents will update prematurely and don't reset properly 
    // (tested, which means in a month or so don't come back and spend another 30 minutes looking 
    // into 'why don't I do parentArray = parents')
    const parentArray = [];
    for (let parent of parents)
    {
        parentArray.push(parent);
    }
    // if we don't have a name we don't want to add to the parenting
    if (name !== "") parentArray.push(name);

    // adds a header with some nesting repersenting the object name, so we know that the nested 
    // properties below it are part of the parent object
    updateMarkup(
        <div key={`${name}-container`} className="input-container">
            <h1 className="input-title" >{Tab.repeat(nesting * NestingModifier)}</h1>
            <h1 style={{right: `${nesting * 10}px`}} className="input-title">{name}</h1>
        </div>
    );
    nesting++;
    // loop though all the properties of the object and render them
    for (let [key, value] of Object.entries(object))
    {
        RenderFile(updateMarkup, `${key}`, value, nesting, parentArray);
    }
}

// check the type of object we are trying to render, if it's an object render object, else we just need to render a value
function RenderFile (updateMarkup, key, value, nesting, parents = [])
{
    let type = typeof value;
    if (type === null || type === undefined) throw new Error("type is null, something bad happened");
    if (type === "object")
    {
        RenderObject(updateMarkup, value, key, nesting, parents);
        nesting--;
        return;
    }
    RenderValue(updateMarkup, key, value, type, nesting, parents);
}

export default RenderObject;