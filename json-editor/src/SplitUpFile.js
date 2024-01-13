// Coyright © Connor deBoer 2024, All Rights Reserved

export default class SplitUp
{
    // this guy takes some stuff, mostly just functions he needs
    constructor(tab, RenderObject, RenderArray, RenderValue)
    {
        this.tab = tab;
        this.RenderObject = RenderObject;
        this.RenderArray = RenderArray;
        this.RenderValue = RenderValue;
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

        if (type == "array")
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
}