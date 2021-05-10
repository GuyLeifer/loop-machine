import React, { useRef, useState } from 'react';
import './Beat.css';

function Beat({ beat }) {
    const beatRef = useRef(null);

    const [beatState, setBeatState] = useState(false);

    const beatClick = () => {
        setBeatState(prev => !prev)
        beatState ? beatRef.current.pause() : beatRef.current.play();
    }

    return (
        <div style={{ height: "70px", width: "70px", margin: "70px", backgroundColor: beat.color, border: beatState ? "green 2px dashed" : "red 2px dashed" }} onClick={beatClick}>
            <audio ref={beatRef} src={beat.audio} loop="true" />
        </div>
    )
}

export default Beat
