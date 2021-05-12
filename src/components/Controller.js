import { FaStopCircle, FaRecordVinyl } from "react-icons/fa";
import { BiPlayCircle, BiStopCircle } from "react-icons/bi";
import { TiThSmallOutline } from "react-icons/ti";
import { FaPowerOff } from "react-icons/fa";

// recoil
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { playAllState, recordState, recordObjectState, loopStartState, playRecordState, startTimeState, endTimeState } from '../recoil/state';

// style 
import { controllerStyle, iconStyle, iconsDivStyle, iconsDivDisabledStyle, iconsDivRecordStyle } from './style/Controller';

function Controller({ setRecordObject }) {

    const [playAll, setPlayAll] = useRecoilState(playAllState);
    const [loopStart, setLoopStart] = useRecoilState(loopStartState);
    const startTime = useRecoilValue(startTimeState);
    const setEndTime = useSetRecoilState(endTimeState);
    const [playRecord, setPlayRecord] = useRecoilState(playRecordState);
    const [record, setRecord] = useRecoilState(recordState);
    const recordObject = useRecoilValue(recordObjectState);

    const loopStarter = () => {
        !record && !playAll && !playRecord &&  setLoopStart(prev => !prev)
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
        <div className="controller" style={controllerStyle}>
            <div className="iconsDiv" style={(!playAll && !record && !playRecord) ? iconsDivStyle : iconsDivDisabledStyle} onClick={loopStarter}>
                {!loopStart && <FaPowerOff style={iconStyle} />}
                {(loopStart && !playAll && !record) && <FaStopCircle style={iconStyle} />}
            </div>
            <div className="iconsDiv" style={(!loopStart && !record && !playRecord) ? iconsDivStyle : iconsDivDisabledStyle} onClick={playAller}>
                {!playAll && <TiThSmallOutline style={iconStyle} />}
                {(playAll && !loopStart && !record) && <FaStopCircle style={iconStyle} />}
            </div>
            <div className="iconsDiv" style={record ? iconsDivRecordStyle : (!loopStart && !playAll && !playRecord) ? iconsDivStyle : iconsDivDisabledStyle} onClick={recorder}>
                <FaRecordVinyl style={iconStyle} />
            </div>
            { (recordObject.length > 0) && !record && ( 
                <div className="iconsDiv" style={(!playAll && !loopStart && !record) ? iconsDivStyle : iconsDivDisabledStyle}>
                {playRecord ? <BiStopCircle style={iconStyle} onClick={() => setPlayRecord(false)}/> : <BiPlayCircle style={iconStyle} onClick={playRecorder}/>}
            </div>  
            )}
        </div>
    )
}

export default Controller
