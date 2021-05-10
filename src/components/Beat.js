import React, { useRef, useState } from 'react';
import './Beat.css';

function Beat({ beat }) {
    const { audio, icon } = beat;

    const beatRef = useRef(null);

    const [beatState, setBeatState] = useState(false);

    const beatClick = () => {
        setBeatState(prev => !prev)
        beatState ? beatRef.current.pause() : beatRef.current.play();
    }

    return (
        <div style={{ position: "relative", height: "70px", width: "70px", margin: "70px", backgroundColor: icon, border: beatState ? "green 2px dashed" : "red 2px dashed" }} onClick={beatClick}>
            <audio ref={beatRef} src={audio} loop="true" />
            {icon}
        </div>
    )
}

export default Beat
