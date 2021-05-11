import './Beat.css';
import { useRef, useState, useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { startTimeState, endTimeState, beatsPlayedState } from '../recoil/state';

    const miniBeatStyle = {
        position: "absolute",
        zIndex: 1,
        height: "70px",
        width: "70px",
        margin: "5px",
    }

function Beat({ beat, index }) {
    const { audio, icon } = beat;

    const [beatState, setBeatState] = useState(false);
    const [beatStateCheck, setBeatStateCheck] = useState(false);
    const [beatsPlayed, setBeatsPlayed] = useRecoilState(beatsPlayedState);
    const [startTime, setStartTime] = useRecoilState(startTimeState);
    const [endTime, setEndTime] = useRecoilState(endTimeState);

    const beatRef = useRef(null);

    useEffect(() => { 
        (async () => {
            if (beatState) {
                if (beatsPlayed === 0) {
                    beatRef.current.play();
                    setStartTime(Number(new Date()));
                } else {
                    const timeDelyed = 8000 - (Number(new Date()) - startTime);
                    setBeatStateCheck("on")
                    setTimeout(() => {
                        setBeatStateCheck(true);
                    }, timeDelyed);
                } 
                setBeatsPlayed(beatsPlayed + 1);
            } else {
                beatRef.current.pause();
                if (beatsPlayed === 1) {
                    setEndTime(Number(new Date()));
                }
                if (beatsPlayed > 0) {
                    setBeatsPlayed(beatsPlayed - 1);
                }
            }  
        })()
    }, [beatState])

    useEffect(() => {
        // set the start and end time of playing
        if (beatsPlayed === 0) {
            setEndTime(Number(new Date()));
        } else { // fix in record!!!!!
            setStartTime(Number(new Date()));
        }
    }, [beatsPlayed])

    useEffect(() => {
        // check if beat button still clicked
        if (beatStateCheck === true && beatState) {
            beatRef.current.play();
        }
    }, [beatStateCheck])

    const beatStyle = {
        height: "80px",
        width: "80px",
        margin: "80px",
        backgroundColor: beatState ? "#777" : "#444",
        position: "relative",
        boxShadow: beatStateCheck === "on" ? "0 0 10px 10px #eff, 0 0 15px 15px yellow" : beatState ? "0 0 10px 10px #eff, 0 0 15px 15px green" : "0 0 10px 10px #eff, 0 0 12px 12px #0ff",
        borderRadius: "10%",
        cursor: "pointer",
    }

    return (
        <div className="beat" style={beatStyle}>
            <div style={miniBeatStyle} onClick={() => setBeatState(prev => !prev)}>
                <audio ref={beatRef} src={audio} loop={true} />
                {icon}
            </div>
        </div>
    )
}

export default Beat