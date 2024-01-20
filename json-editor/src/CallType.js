// Coyright © Connor deBoer 2024, All Rights Reserved
import DetermineType from "./DetermineType.js";
import { RenderArray, RenderObject } from "./RenderObject";
import RenderValue from './RenderValue.js'

// this guy is the 'public' function used in this class, it calls the approperaite 
// function based off if it's an object, array, or normal field
function CallType (updateMarkup, key, value, nesting, parents = [])
{
    let type = DetermineType(value);
    if (type === "object")
    {
        RenderObject(updateMarkup, value, key, nesting, parents);
        nesting--;
        return;
    }

    if (type === "array")
    {
        RenderArray(updateMarkup, key, value, nesting, parents);
        nesting--;
        return;
    }

    RenderValue(updateMarkup, key, value, type, nesting, parents);
}

export default CallType;