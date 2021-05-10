import './LoopMachine.css';
import Beat from './Beat';

import futureFunk from '../audioFiles/future_funk_beats_25.mp3'
import stutterBreak from "../audioFiles/120_stutter_breakbeats_16.mp3";
import bassFunk from "../audioFiles/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import electricGuitar from "../audioFiles/electric guitar coutry slide 120bpm - B.mp3";
import stompySlosh from "../audioFiles/FUD_120_StompySlosh.mp3";
import grooveTango from "../audioFiles/GrooveB_120bpm_Tanggu.mp3";
import mazePolitics from "../audioFiles/MazePolitics_120_Perc.mp3";
import pasGroove from "../audioFiles/PAS3GROOVE1.03B.mp3";
import silentStar from "../audioFiles/SilentStar_120_Em_OrganSynth.mp3";

const beats = [
    { audio: futureFunk, color: "green" },
    { audio: stutterBreak, color: "red" },
    { audio: bassFunk, color: "purple" },
    { audio: electricGuitar, color: "blue" },
    { audio: stompySlosh, color: "yellow" },
    { audio: grooveTango, color: "black" },
    { audio: mazePolitics, color: "pink" },
    { audio: pasGroove, color: "grey" },
    { audio: silentStar, color: "orange" },
]

function LoopMachine() {

    return (
        <div className="loop-machine">
            {beats.map(beat => <Beat beat={beat} />)}
        </div>
    )
}

export default LoopMachine
