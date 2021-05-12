import { useRef, useState, useEffect, useCallback } from 'react';

// recoil
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { startTimeState, endTimeState, playAllState, recordState, recordObjectState, loopStartState, playRecordState } from '../recoil/state';

// style 
import { miniBeatStyle, beatStyle } from './style/Beat';

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
    const [playRecord, setPlayRecord] = useRecoilState(playRecordState);
       
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
                    record && setRecordObject(prev => [...prev , {time: new Date() - startTime, index: index, type: "pause"}])
                    beatRef.current.pause();
                } 
            } else { // restart
                setStartTime(null);
                setBeatState(false)
                setBeatStateCheck(false)
                beatRef.current.pause();
                beatRef.current.currentTime = 0;
            }
        })()
    }, [beatState, loopStart, record, playRecord])

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
        } else if (playRecord) {
            setStartTime(0);
            setTimeout(() => {
                setPlayRecord(false);
        }, endTime);
        } else if (!playRecord) {
            setBeatState(false);
            beatRef.current.pause();
            beatRef.current.currentTime = 0;
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
    } , [playAll, loopStart, record])

    return (
        <div className="beat" style={beatStyle(beatState, loopStart, record, playRecord, playAll, beatStateCheck)}>
            <div style={miniBeatStyle} onClick={clickBeatHandle}>
                <audio ref={beatRef} src={audio} loop={true} />
                {icon}
            </div>
        </div>
    )
}

export default Beat