import { useState } from "react";

import { FaStopCircle, FaRecordVinyl } from "react-icons/fa";
import { BiPlayCircle, BiStopCircle } from "react-icons/bi";
import { TiThSmallOutline } from "react-icons/ti";
import { FaPowerOff } from "react-icons/fa";

// recoil
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { playAllState, recordState, recordObjectState, loopStartState, playRecordState, startTimeState, endTimeState, speedState } from '../recoil/state';

// style 
import './style/Controller.css';
import { withStyles } from "@material-ui/core/styles";
import Slider from '@material-ui/core/Slider';

const SliderSpeed = withStyles({
    root: {
        color: "white",
    },
    thumb: {
        backgroundColor: "white",
        color: "white",
    },
    valueLabel: {
        '& *': {
            background: 'white',
            color: '#000',
            fontWeight: 'bold'
        },
    },
    active: {},
    track: {
        height: 5,
    },
    rail: {
        height: 5,
        borderRadius: 4
    }
})(Slider);

function Controller({ setRecordObject }) {

    const [speed, setSpeed] = useState(1);

    const [playAll, setPlayAll] = useRecoilState(playAllState);
    const [loopStart, setLoopStart] = useRecoilState(loopStartState);
    const startTime = useRecoilValue(startTimeState);
    const setEndTime = useSetRecoilState(endTimeState);
    const setSpeedState = useSetRecoilState(speedState);
    const [playRecord, setPlayRecord] = useRecoilState(playRecordState);
    const [record, setRecord] = useRecoilState(recordState);
    const recordObject = useRecoilValue(recordObjectState);

    const loopStarter = () => {
        setSpeedState(speed);
        !record && !playAll && !playRecord && setLoopStart(prev => !prev)
    }

    const playAller = () => {
        setSpeedState(speed);
        !loopStart && !record && !playRecord && setPlayAll(prev => !prev)
    }

    const recorder = () => {
        setSpeedState(speed);
        !loopStart && !playAll && !playRecord && setRecord(prev => !prev);
        record && setEndTime(new Date() - startTime);
    }

    const playRecorder = () => {
        setSpeedState(speed);
        setRecordObject(recordObject);
        setPlayRecord(true);
    }

    return (
        <div className="controllerStyle">
            <div className="icons">
                <div className={(!playAll && !record && !playRecord) ? "iconsDivStyle" : "iconsDivDisabledStyle"} onClick={loopStarter}>
                    {!loopStart && <FaPowerOff className="iconStyle" />}
                    {(loopStart && !playAll && !record) && <FaStopCircle className="iconStyle" />}
                </div>
                <div className={(!loopStart && !record && !playRecord) ? "iconsDivStyle" : "iconsDivDisabledStyle"} onClick={playAller}>
                    {!playAll && <TiThSmallOutline className="iconStyle" />}
                    {(playAll && !loopStart && !record) && <FaStopCircle className="iconStyle" />}
                </div>
                <div className={record ? "iconsDivRecordStyle" : (!loopStart && !playAll && !playRecord) ? "iconsDivStyle" : "iconsDivDisabledStyle"} onClick={recorder}>
                    <FaRecordVinyl className="iconStyle" />
                </div>
                <div className={(!playAll && !loopStart && !record && recordObject.length > 0) ? "iconsDivStyle" : "iconsDivDisabledStyle"}>
                    {playRecord ? <BiStopCircle className="iconStyle" onClick={() => setPlayRecord(false)} /> : <BiPlayCircle className="iconStyle" onClick={playRecorder} />}
                </div>
            </div>
            <SliderSpeed
                className="slider"
                defaultValue={1}
                onChange={(e, value) => setSpeed(value)}
                valueLabelDisplay="auto"
                step={0.25}
                min={0}
                max={2}
                disabled={loopStart || playAll || record || playRecord ? true : false}
            />
        </div>
    )
}

export default Controller
