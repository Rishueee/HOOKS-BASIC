import React, { useState } from 'react'


const UseEffect = () => {
    const [hide, changeHide] = useState(true);

    function handleClick() {
        changeHide(!hide);
        alert("You Can't See Me")
    }

    return (
        <div className='lorem'>
            {!hide && (
                <p className='box'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
            )}
            <button onClick={handleClick}>CLICK ME</button>
        </div>
    )
}

export default UseEffect