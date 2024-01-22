// Coyright © Connor deBoer 2024, All Rights Reserved

import React, { useState } from "react";
import './DisplayFile.css';
import { GetFileData } from './FileData.js';
import RenderObject from "./RenderObject.js";

function DisplayFile()
{
    const [stateMarkup, setStateMarkup] = useState([]);

    let markup = []
    const updateMarkup = (newMarkup) =>
    {
        markup.push(newMarkup);
    }

    // this guy means we wont try and render anything until we get a file
    document.addEventListener('onFileRead', () => 
    {
        RenderObject(updateMarkup, GetFileData().data);
        setStateMarkup(markup);
    });

    return(
        <div className="json-editor">
            {stateMarkup}
        </div>
    );
}

export default DisplayFile