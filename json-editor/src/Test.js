// Coyright © Connor deBoer 2024, All Rights Reserved

import React, { useState } from 'react'

const Test = ({ value }) =>
{
    const [testValue, setTestValue] = useState(value || '');

    return(
        <div>
            <input 
                type="text"
                value={testValue}
                onChange={event => setTestValue(event.target.value)}
            />
            <button onClick={() => {console.log(testValue)}}>Check Value</button>
        </div>
    );
}

export default Test;