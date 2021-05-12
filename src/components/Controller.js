import { FaStopCircle, FaRecordVinyl } from "react-icons/fa";
import { BiPlayCircle, BiStopCircle } from "react-icons/bi";
import { TiThSmallOutline } from "react-icons/ti";
import { FaPowerOff } from "react-icons/fa";

// recoil
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { playAllState, recordState, recordObjectState, loopStartState, playRecordState, startTimeState, endTimeState } from '../recoil/state';

// style 
import './style/Controller.css';

function Controller({ setRecordObject }) {

    const [playAll, setPlayAll] = useRecoilState(playAllState);
    const [loopStart, setLoopStart] = useRecoilState(loopStartState);
    const startTime = useRecoilValue(startTimeState);
    const setEndTime = useSetRecoilState(endTimeState);
    const [playRecord, setPlayRecord] = useRecoilState(playRecordState);
    const [record, setRecord] = useRecoilState(recordState);
    const recordObject = useRecoilValue(recordObjectState);

    const loopStarter = () => {
        !record && !playAll && !playRecord && setLoopStart(prev => !prev)
    }

    const playAller = () => {
        !loopStart && !record && !playRecord && setPlayAll(prev => !prev)
    }

    const recorder = () => {
        !loopStart && !playAll && !playRecord && setRecord(prev => !prev);
        record && setEndTime(new Date() - startTime);
    }

    const playRecorder = () => {
        setRecordObject(recordObject);
        setPlayRecord(true);
    }

    return (
        <div className="controllerStyle">
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
            { (recordObject.length > 0) && !record && (
                <div className={(!playAll && !loopStart && !record) ? "iconsDivStyle" : "iconsDivDisabledStyle"}>
                    {playRecord ? <BiStopCircle className="iconStyle" onClick={() => setPlayRecord(false)} /> : <BiPlayCircle className="iconStyle" onClick={playRecorder} />}
                </div>
            )}
        </div>
    )
}

export default Controller
