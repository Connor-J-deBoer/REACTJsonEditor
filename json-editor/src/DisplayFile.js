// Coyright © Connor deBoer 2024, All Rights Reserved

import React, { useState } from "react";
import './DisplayFile.css'
import { FileData } from './FileData.js';
import SplitUp from "./SplitUpFile.js";


function DisplayFile()
{
    const [stateMarkup, setStateMarkup] = useState([]);

    let markup = []
    const updateMarkup = (newMarkup) =>
    {
        markup.push(newMarkup);
    }

    const splitUp = new SplitUp(updateMarkup);

    // this guy means we wont try and render anything until we get a file
    // you'll notice this guy is also calling the RenderObject function in 
    // a round about way, that's because we have parameters for that function 
    // that the event was placing itself into, which we don't want in this case
    document.addEventListener('onFileRead', () => {
        splitUp.RenderObject(FileData.data);
        setStateMarkup(markup);
        console.log(stateMarkup);
    });

    return(
        <div>
            {stateMarkup}
        </div>
    );
}

export default DisplayFile