import { useRef, useState, useEffect } from 'react';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { startTimeState, endTimeState, firstPlayState, playAllState, recordState, recordObjectState, loopStartState, playRecordState } from '../recoil/state';

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
    const [firstPlay, setFirstPlay] = useRecoilState(firstPlayState);
    const [startTime, setStartTime] = useRecoilState(startTimeState);
    
    const loopStart = useRecoilValue(loopStartState);
    const playAll = useRecoilValue(playAllState);
    const record = useRecoilValue(recordState);
    const playRecord = useRecoilValue(playRecordState);
    const [recordObject,setRecordObject] = useRecoilState(recordObjectState);
    
    const beatRef = useRef(null);

    useEffect(() => { 
        (async () => {
            if (loopStart || record || playRecord) {
                if (beatState) {
                    if (!startTime || startTime === 0) {
                        beatRef.current.play();
                        setStartTime(Number(new Date()));
                        record && setRecordObject([{time: 0, index: index, type: "start"}])
                    } else {
                        const timeDelyed = 8000 - ((Number(new Date()) - startTime) % 8000);
                        setBeatStateCheck("on")
                        record && setRecordObject(prev => [...prev , {time: new Date() - startTime, index: index, type: "check"}])
                        setTimeout(() => {
                            setBeatStateCheck(true);
                        }, timeDelyed);
                    }   
                } else {
                    record.length > 0 && setRecordObject(prev => [...prev , {time: new Date() - startTime, index: index, type: "pause"}])
                    beatRef.current.pause();
                    if (firstPlay) {
                        setStartTime(null);
                    } 
                } 
            } else { // restart
                setStartTime(null);
                setBeatState(false)
                setBeatStateCheck(false)
                beatRef.current.pause();
                beatRef.current.currentTime = 0;
            }
        })()
    }, [beatState, loopStart, record])

    useEffect(() => {
        // check if beat button still clicked
        if (beatStateCheck === true && beatState) {
            beatRef.current.play();
            record && setRecordObject(prev => [...prev , {time: new Date() - startTime, index: index, type: "play"}])
        }
    }, [beatStateCheck])

    useEffect(() => {
        if (playAll) {
            beatRef.current.play()
        }
        else {
            beatRef.current.pause();
            beatRef.current.currentTime = 0;
        } 
    }, [playAll])

    console.log(recordObject)

    useEffect(() => {
        playRecord && setStartTime(0);
    }, [playRecord])

    useEffect(() => {
        if (startTime === 0) {
            const recordToPlay = recordObject.filter(record => record.index === index);
            recordToPlay.forEach((record, i) => {
                console.log(i, index)
                if (record.index === index) {
                    if (record.type === "start") {
                        setBeatState(true)
                    } else {
                        setTimeout(() => {
                            setBeatState(true)
                        }, record.time)
                    }
                }
            })
        }
    }, [startTime])

    const clickBeatHandle = () => {
        if (!playAll && (loopStart || record)) {
            setBeatState(prev => !prev)
        }
    }

    const beatStyle = {
        height: "80px",
        width: "80px",
        margin: "80px",
        backgroundColor: ((beatState && (loopStart || record || playRecord)) || playAll) ? "#777" : "#444",
        position: "relative",
        boxShadow: beatStateCheck === "on" ? "0 0 10px 10px #eff, 0 0 15px 15px yellow" : ((beatState && (loopStart || record || playRecord)) || playAll) ? "0 0 10px 10px #eff, 0 0 15px 15px green" : "0 0 10px 10px #eff, 0 0 12px 12px #0ff",
        borderRadius: "10%",
        cursor: "pointer",
    }

    return (
        <div className="beat" style={beatStyle}>
            <div style={miniBeatStyle} onClick={clickBeatHandle}>
                <audio ref={beatRef} src={audio} loop={true} />
                {icon}
            </div>
        </div>
    )
}

export default Beat