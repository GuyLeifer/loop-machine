import { useRef, useState, useEffect, useCallback } from 'react';

// recoil
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { startTimeState, endTimeState, playAllState, recordState, recordObjectState, loopStartState, playRecordState, speedState } from '../recoil/state';

// style 
import './style/Beat.css';

function Beat({ beat, index, recordObject }) {

    const { audio, icon } = beat;

    const [beatState, setBeatState] = useState(false);
    const [beatStateCheck, setBeatStateCheck] = useState(false);

    const [startTime, setStartTime] = useRecoilState(startTimeState);
    const endTime = useRecoilValue(endTimeState);
    const setRecordObject = useSetRecoilState(recordObjectState);

    const loopStart = useRecoilValue(loopStartState);
    const playAll = useRecoilValue(playAllState);
    const record = useRecoilValue(recordState);
    const speed = useRecoilValue(speedState);
    const [playRecord, setPlayRecord] = useRecoilState(playRecordState);

    const audioRef = useRef(null);
    const beatRef = useRef(null);

    useEffect(() => {
        (async () => {
            if (loopStart || record || playRecord) {
                if (beatState) {
                    if (!startTime || startTime === 0) {
                        audioRef.current.play();
                        setStartTime(Number(new Date()));
                        record && setRecordObject([{ time: 0, index: index, type: "start" }])
                    } else {
                        const timeDelyed = 8000 * (1 / speed) - ((Number(new Date()) - startTime) % 8000 * (1 / speed));
                        setBeatStateCheck("on")
                        record && setRecordObject(prev => [...prev, { time: new Date() - startTime, index: index, type: "check" }])
                        setTimeout(() => {
                            setBeatStateCheck(true);
                        }, timeDelyed);
                    }
                } else {
                    record && startTime && setRecordObject(prev => [...prev, { time: new Date() - startTime, index: index, type: "pause" }])
                    audioRef.current.pause();
                }
            } else { // restart
                setStartTime(null);
                setBeatState(false)
                setBeatStateCheck(false)
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        })()
    }, [beatState, loopStart, record, playRecord])

    useEffect(() => {
        // check if beat button still clicked
        if (beatStateCheck === true && beatState) {
            audioRef.current.play();
            record && setRecordObject(prev => [...prev, { time: new Date() - startTime, index: index, type: "play" }])
        }
    }, [beatStateCheck])

    useEffect(() => {
        if (playAll) {
            audioRef.current.play()
        } else if (playRecord) {
            setStartTime(0);
            setTimeout(() => {
                setPlayRecord(false);
            }, endTime);
        } else if (!playRecord) {
            setBeatState(false);
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [playAll, playRecord])


    useEffect(() => {
        if (startTime === 0) {
            const recordToPlay = recordObject.filter(record => record.index === index); // filter only relevant records
            recordToPlay.forEach((record) => {
                if (record.index === index) {
                    if (record.type === "start") {
                        setBeatState(true)
                    } else if (record.type === "check") {
                        setTimeout(() => {
                            setBeatState(true)
                        }, record.time)
                    } else if (record.type === "pause") {
                        setTimeout(() => {
                            setBeatState(false)
                        }, record.time)
                    }
                }
            })
        }
    }, [startTime])

    const clickBeatHandle = useCallback(() => {
        if (!playAll && (loopStart || record)) {
            setBeatState(prev => !prev)
        }
    }, [playAll, loopStart, record])

    if (beatRef.current) {
        audioRef.current.playbackRate = speed
        beatRef.current.style.boxShadow = beatStateCheck === "on" ? "0 0 10px 10px #eff, 0 0 15px 15px yellow" : ((beatState && (loopStart || record || playRecord)) || playAll) ? "0 0 10px 10px #eff, 0 0 15px 15px green" : "0 0 10px 10px #eff, 0 0 12px 12px #0ff"
        beatRef.current.style.backgroundColor = ((beatState && (loopStart || record || playRecord)) || playAll) ? "#777" : "#444"
    }

    return (
        <div className="beat" ref={beatRef}>
            <div className="miniBeatStyle" onClick={clickBeatHandle}>
                <audio ref={audioRef} src={audio} loop={true} />
                {icon}
            </div>
        </div>
    )
}

export default Beat