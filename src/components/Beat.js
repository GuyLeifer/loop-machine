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

    const miniBeatStyle = {
        position: "absolute",
        zIndex: 1,
        height: "70px",
        width: "70px",
        margin: "5px",
        // border: beatState ? "green 2px dashed" : "red 2px dashed"
    }

    const beatStyle = {
        height: "80px",
        width: "80px",
        margin: "80px",
        backgroundColor: beatState ? "#777" : "#444",
        position: "relative",
        boxShadow: beatState ? "0px 0px 10px 10px green" : "0px 0px 10px 10px #eff",
        borderRadius: "10%",
    }

    return (
        <div className="beat" style={beatStyle}>
            <div style={miniBeatStyle} onClick={beatClick}>
                <audio ref={beatRef} src={audio} loop="true" />
                {icon}
            </div>
        </div>
    )
}

export default Beat
