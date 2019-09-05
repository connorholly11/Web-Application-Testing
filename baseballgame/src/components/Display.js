import React, {useState} from 'react';

const Display = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    return(
        <div>
            <h1>I AM DISPLAY</h1>
            <button> Strike </button>
            <button> Ball </button>
        </div>
    )
}

export default Display;