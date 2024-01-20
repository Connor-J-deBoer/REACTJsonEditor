// Coyright © Connor deBoer 2024, All Rights Reserved


const tab = "---";
const nestingModifier = 2;



export default class SplitUp
{
    constructor(updateMarkup, updateFile)
    {
        this.updateMarkup = updateMarkup;
        this.updateFile = updateFile;
    }

    

    

    RenderObject = (object, name = "", nesting = 0, parent = "") =>
    {
        if (name !== "") console.log(`${tab.repeat(nesting)}${name}`);
        this.updateMarkup(
            <div key={`${name}-container`} className="input-container">
                <h1 className="input-title" >{tab.repeat(nesting * nestingModifier)}</h1>
                <h1 style={{right: `${nesting * 10}px`}} className="input-title">{name}</h1>
            </div>
            );
        nesting++;
        for (let [key, value] of Object.entries(object))
        {
            this.CallType(`${key}`, value, nesting, name);
        }
    }

    // this guy draws an array by call the split up function, he also increments nesting
    RenderArray = (name, array, nesting, parent = "") =>
    {
        console.log(`${tab.repeat(nesting)}${name}`);
        this.updateMarkup(
            <div key={`${name}-container`} className="input-container">
                <h1 className="input-title" >{tab.repeat(nesting * nestingModifier)}</h1>
                <h1 style={{margineLeft: `${nesting * 10}px`}} className="input-title">{name}</h1>
            </div>
            );
        nesting++;
        for (let i = 0; i < array.length; ++i)
        {
            this.CallType(`${i}`, array[i], nesting, name);
        }
    }
}