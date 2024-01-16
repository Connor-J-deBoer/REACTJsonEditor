// Coyright © Connor deBoer 2024, All Rights Reserved
const tab = "   ";

export default class SplitUp
{
    constructor(updateMarkup)
    {
        this.updateMarkup = updateMarkup;
    }

    // this guy is the 'public' function used in this class, it calls the approperaite 
    // function based off if it's an object, array, or normal field
    CallType = (key, value, nesting) =>
    {
        let type = this.DetermineType(value);
        if (type === "object")
        {
            this.RenderObject(value, key, nesting);
            nesting--;
            return;
        }

        if (type === "array")
        {
            this.RenderArray(key, value, nesting);
            nesting--;
            return;
        }

        this.RenderValue(key, value, type, nesting);
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

    RenderObject = (object, name = "", nesting = 0) =>
    {
        if (name !== "") console.log(`${tab.repeat(nesting)}${name}`);
        nesting++;
        for (let [key, value] of Object.entries(object))
        {
            this.CallType(key, value, nesting)
        }
    }

    // this guy draws an array by call the split up function, he also increments nesting
    RenderArray = (name, array, nesting) =>
    {
        console.log(`${tab.repeat(nesting)}${name}`);
        nesting++;
        for (let i = 0; i < array.length; ++i)
        {
            this.CallType(i, array[i], nesting);
        }
    }

    RenderValue = (key, value, type, nesting) =>
    {
        console.log(`${tab.repeat(nesting)}${type} ${key} = ${value}`);
        const newMarkup = (
            <div key={`${key}-${type}`} className="input-container" >
                <h1 className="input-title" >{key}:</h1>
                <input className="input-field" id={`${key}-${type}`} type={type} defaultValue={value} />
            </div>
        );

        this.updateMarkup(newMarkup);
    }
}