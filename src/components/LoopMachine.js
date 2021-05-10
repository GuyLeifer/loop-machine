import './LoopMachine.css';
import Beat from './Beat';

// audio
import futureFunk from '../audioFiles/future_funk_beats_25.mp3'
import stutterBreak from "../audioFiles/120_stutter_breakbeats_16.mp3";
import bassFunk from "../audioFiles/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import electricGuitar from "../audioFiles/electric guitar coutry slide 120bpm - B.mp3";
import stompySlosh from "../audioFiles/FUD_120_StompySlosh.mp3";
import grooveTango from "../audioFiles/GrooveB_120bpm_Tanggu.mp3";
import mazePolitics from "../audioFiles/MazePolitics_120_Perc.mp3";
import pasGroove from "../audioFiles/PAS3GROOVE1.03B.mp3";
import silentStar from "../audioFiles/SilentStar_120_Em_OrganSynth.mp3";

// icons
import { GiGuitar, GiGuitarBassHead, GiDrum, GiCompactDisc, GiTambourine, GiStarsStack, GiMazeSaw } from 'react-icons/gi';
import { FaHeartbeat } from 'react-icons/fa';
import { DiGroovy } from 'react-icons/di';

const iconStyle = {
    position: "absolute",
    height: "50px",
    width: "50px",
    left: 10,
    top: 10,
}

const beats = [
    { audio: futureFunk, icon: <GiCompactDisc style={iconStyle} style={iconStyle} /> },
    { audio: stutterBreak, icon: <FaHeartbeat style={iconStyle} /> },
    { audio: bassFunk, icon: <GiGuitarBassHead style={iconStyle} /> },
    { audio: electricGuitar, icon: <GiGuitar style={iconStyle} /> },
    { audio: stompySlosh, icon: <GiDrum style={iconStyle} /> },
    { audio: grooveTango, icon: <GiTambourine style={iconStyle} /> },
    { audio: mazePolitics, icon: < GiMazeSaw style={iconStyle} /> },
    { audio: pasGroove, icon: <DiGroovy style={iconStyle} /> },
    { audio: silentStar, icon: <GiStarsStack style={iconStyle} /> },
]

function LoopMachine() {

    return (
        <div className="loop-machine">
            {beats.map(beat => <Beat beat={beat} />)}
        </div>
    )
}

export default LoopMachine
