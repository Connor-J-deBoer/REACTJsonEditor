// Coyright © Connor deBoer 2024, All Rights Reserved

// this guy figures out what type something is, it's needed because the 
// typeof thingy doesn't figure out the difference between an object, array, 
// or null, so this guy is just an extra step that is required
function DetermineType(value)
{
    let type = typeof value;
    if (type === "object")
    {
        if (value === null || value === undefined) return "null";
        if (Array.isArray(value)) return "array";
    }
    return type;
}

export default DetermineType;