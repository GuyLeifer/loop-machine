import { FaPlayCircle, FaStopCircle, FaRecordVinyl } from "react-icons/fa";

// recoil
import { useSetRecoilState } from 'recoil';
import { playAllState } from '../recoil/state';

const controllerStyle = {
    position: "absolute",
    right: "10%",
    bottom: "30%",
    width: "10%",
    // display: "flex",
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
    margin: "10%",
    backgroundColor: "white",
    borderRadius: "50%",
}

function Controller() {

    const setPlayAll = useSetRecoilState(playAllState);

    return (
        <div className="controller" style={controllerStyle}>
            <div className="iconsDiv" style={iconsDivStyle} onClick={() => setPlayAll(true)}>
                <FaPlayCircle style={iconStyle} />
            </div>
            <div className="iconsDiv" style={iconsDivStyle} onClick={() => setPlayAll(false)}>
                <FaStopCircle style={iconStyle} />
            </div>
            <div className="iconsDiv" style={iconsDivStyle}>
                <FaRecordVinyl style={iconStyle} />
            </div>
        </div>
    )
}

export default Controller
