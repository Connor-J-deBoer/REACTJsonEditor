// Coyright © Connor deBoer 2024, All Rights Reserved

import React from "react";
import { FileData } from './FileData.js';
import SplitUp from "./SplitUpFile.js";
const tab = "   ";

export default class DisplayFile extends React.Component
{
    constructor(props)
    {
        super(props);

        // this is a seperate class we created to clean up this script, it contains the functions that don't print anything
        this.splitUp = new SplitUp(tab, this.RenderObject, this.RenderArray, this.RenderValue);

        // this guy means we wont try and render anything until we get a file
        // you'll notice this guy is also calling the RenderObject function in 
        // a round about way, that's because we have parameters for that function 
        // that the event was placing itself into, which we don't want in this case
        document.addEventListener('onFileRead', () => {
            this.RenderObject(FileData.data);
        });
    }

    // this guy draws an object by calling the the split up function, he also increments nesting
    RenderObject = (object, name = "", nesting = 0) =>
    {
        if (name !== "") console.log(`${tab.repeat(nesting)}${name}`);
        nesting++;
        for (let [key, value] of Object.entries(object))
        {
            this.splitUp.CallType(key, value, nesting)
        }
    }

    // this guy draws an array by call the split up function, he also increments nesting
    RenderArray = (name, array, nesting) =>
    {
        console.log(`${tab.repeat(nesting)}${name}`);
        nesting++;
        for (let i = 0; i < array.length; ++i)
        {
            this.splitUp.CallType(i, array[i], nesting);
        }
    }

    // TODO: make this actual markup and input fields
    RenderValue(key, value, type, nesting)
    {
        console.log(`${tab.repeat(nesting)}${type} ${key} = ${value}`);
    }
    
    render()
    {
        return(
        <div></div>
        )
    }
}