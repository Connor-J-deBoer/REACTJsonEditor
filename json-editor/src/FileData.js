// Coyright © Connor deBoer 2024, All Rights Reserved

let FileData = {"data": {}};
let FileName = "";
const Tab = '---';
const NestingModifier = 2;

function GetFileData()
{
    return FileData;
}

function SetFileData(newValue)
{
    FileData = newValue;
}

function GetFileName()
{
    return FileName;
}

function SetFileName(newName)
{
    FileName = newName
}

export 
{
    GetFileData,
    SetFileData,

    GetFileName,
    SetFileName,
    
    Tab,
    NestingModifier
};