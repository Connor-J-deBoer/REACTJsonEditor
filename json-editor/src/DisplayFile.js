// Coyright © Connor deBoer 2024, All Rights Reserved

import React from "react";
import { FileData } from './FileData.js';

export default class DisplayFile extends React.Component
{
    constructor(props)
    {
        super(props);
        document.addEventListener('onFileRead', this.Test);
    }

    Test = () =>
    {
        this.RenderObject(FileData.data);
    }

    RenderField(name, value, type)
    {
        return (
            <input key={`${name}-${type}`} className="inputValue">{value}</input>
            );
    }
        
    RenderObject = (object, space = "") =>
    {
        for (let [key, value] of Object.entries(object))
        {
            let type = typeof value;
            if (type === "object")
            {
                if (value === null || value === undefined) continue;
                if (Array.isArray(value))
                {
                    console.log(`${key}:`)
                    this.RenderArray(value);
                    continue;
                }

                console.log(`${key}:`)
                this.RenderObject(value, "   ");
                continue;
            }
            console.log(`${space}${key}: ${value} === ${type}`);
        }
    }
        
    RenderArray(array)
    {
        for (let value of array)
        {
            console.log(`   ${value}`);
        }
    }
    
    render()
    {
        return(
        <div></div>
        )
    }
}