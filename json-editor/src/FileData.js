// Coyright © Connor deBoer 2024, All Rights Reserved
import { useState } from 'react';

let FileData = {"data": {}};
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

export 
{
    GetFileData,
    SetFileData,
    Tab,
    NestingModifier
};