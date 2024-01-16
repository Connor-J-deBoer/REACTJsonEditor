// Coyright © Connor deBoer 2024, All Rights Reserved
const tab = "---";
const nestingModifier = 2;

export default class SplitUp
{
    constructor(updateMarkup)
    {
        this.updateMarkup = updateMarkup;
    }

    // this guy is the 'public' function used in this class, it calls the approperaite 
    // function based off if it's an object, array, or normal field
    CallType = (key, value, nesting, parent = "") =>
    {
        let type = this.DetermineType(value);
        if (type === "object")
        {
            this.RenderObject(value, key, nesting, parent);
            nesting--;
            return;
        }

        if (type === "array")
        {
            this.RenderArray(key, value, nesting, parent);
            nesting--;
            return;
        }

        this.RenderValue(key, value, type, nesting, parent);
    }

    // this guy figures out what type something is, it's needed because the 
    // typeof thingy doesn't figure out the difference between an object, array, 
    // or null, so this guy is just an extra step that is required
    DetermineType(value)
    {
        let type = typeof value;
        if (type === "object")
        {
            if (value === null || value === undefined) return "null";
            if (Array.isArray(value)) return "array";
        }
        return type;
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

    RenderValue = (key, value, type, nesting, parent = "") =>
    {
        console.log(`${tab.repeat(nesting)}${type} ${key} = ${value}`);
        const newMarkup = (
            <div key={`${parent}${key}-${type}-container`} className="input-container" >
                <h1 className="input-title" >{tab.repeat(nesting * nestingModifier)}</h1>
                <h1 className="input-title" >{key}:</h1>
                <input className="input-field" id={`${key}-${type}`} type={type} defaultValue={value} />
            </div>
        );

        this.updateMarkup(newMarkup);
    }
}