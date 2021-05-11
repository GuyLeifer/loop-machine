import { FaPlayCircle, FaStopCircle, FaRecordVinyl, FaTimesCircle, FaCircle } from "react-icons/fa";
import { BiPlayCircle } from "react-icons/bi";
import { TiThSmallOutline } from "react-icons/ti";
import { FaPowerOff } from "react-icons/fa";

// recoil
import { useRecoilState, useSetRecoilState } from 'recoil';
import { playAllState, recordState, recordObjectState, loopStartState, playRecordState } from '../recoil/state';

const controllerStyle = {
    position: "absolute",
    right: "10%",
    top: "40%",
}

const iconStyle = {
    position: "absolute",
    top: "5px",
    left: "5px",
    height: "50px",
    width: "50px",
    cursor: "pointer",
}
const iconsDivStyle = {
    position: "relative",
    height: "60px",
    width: "60px",
    margin: "10px",
    backgroundColor: "white",
    borderRadius: "50%",
}
const iconsDivDisabledStyle = {
    position: "relative",
    height: "60px",
    width: "60px",
    margin: "10px",
    backgroundColor: "grey",
    borderRadius: "50%",
}
const inlineDivStyle = {
    display: "flex",
}

function Controller() {

    const [playAll, setPlayAll] = useRecoilState(playAllState);
    const [loopStart, setLoopStart] = useRecoilState(loopStartState);
    const setPlayRecord = useSetRecoilState(playRecordState);
    const [record, setRecord] = useRecoilState(recordState);
    const [recordObject, setRecordObject] = useRecoilState(recordObjectState);

    const loopStarter = () => {
        !record && !playAll && setLoopStart(prev => !prev)
    }

    const playAller = () => {
        !loopStart && !record && setPlayAll(prev => !prev)
    }

    const recorder = () => {
        !loopStart && !playAll && setRecord(prev => !prev)
    }

    return (
        <div className="controller" style={controllerStyle}>
            <div className="iconsDiv" style={(!playAll && !record) ? iconsDivStyle : iconsDivDisabledStyle} onClick={loopStarter}>
                {!loopStart && <FaPowerOff style={iconStyle} />}
                {(loopStart && !playAll && !record) && <FaStopCircle style={iconStyle} />}
            </div>
            <div className="iconsDiv" style={(!loopStart && !record) ? iconsDivStyle : iconsDivDisabledStyle} onClick={playAller}>
                {!playAll && <TiThSmallOutline style={iconStyle} />}
                {(playAll && !loopStart && !record) && <FaStopCircle style={iconStyle} />}
            </div>
            <div className="iconsDiv" style={(!loopStart && !playAll) ? iconsDivStyle : iconsDivDisabledStyle} onClick={recorder}>
                <FaRecordVinyl style={iconStyle} />
            </div>
            { (recordObject.length > 0) && !record && ( 
                <div className="iconsDiv" style={(!playAll && !loopStart && !record) ? iconsDivStyle : iconsDivDisabledStyle} onClick={() => setPlayRecord(prev => !prev)}>
                <BiPlayCircle style={iconStyle} />
            </div>  
            )}
        </div>
    )
}

export default Controller
