import { useState } from 'react';

import './style/LoopMachine.css';
import Beat from './Beat';
import Controller from './Controller';

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
    { audio: futureFunk, icon: <GiCompactDisc className="icon" /> },
    { audio: stutterBreak, icon: <FaHeartbeat className="icon" /> },
    { audio: bassFunk, icon: <GiGuitarBassHead className="icon" /> },
    { audio: electricGuitar, icon: <GiGuitar className="icon" /> },
    { audio: stompySlosh, icon: <GiDrum className="icon" /> },
    { audio: grooveTango, icon: <GiTambourine className="icon" /> },
    { audio: mazePolitics, icon: < GiMazeSaw className="icon" /> },
    { audio: pasGroove, icon: <DiGroovy className="icon" /> },
    { audio: silentStar, icon: <GiStarsStack className="icon" /> },
]

function LoopMachine() {

    const [recordObject, setRecordObject] = useState([])

    return (
        <div className="container">
            <div className="loop-machine">
                {beats.map((beat, index) => <Beat beat={beat} key={index} index={index} recordObject={recordObject} />)}
            </div>
            <Controller setRecordObject={setRecordObject} />
        </div>
    )
}

export default LoopMachine