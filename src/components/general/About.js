import React from 'react';
import './About.css';
import Modal from 'react-modal';

import { FaStopCircle, FaRecordVinyl } from "react-icons/fa";
import { BiPlayCircle, BiStopCircle } from "react-icons/bi";
import { TiThSmallOutline } from "react-icons/ti";
import { FaPowerOff } from "react-icons/fa";

function About({ isOpen, setIsOpen }) {
    console.log(isOpen)
    return (
        <Modal
            className="content"
            overlayClassName="overlay"
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
        >
            <h2>About</h2>
            <div>
                <div className="infoIcon">
                    <div className="icon-about"><FaPowerOff /></div>
                    <div className="text">Loop Start</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-about"><TiThSmallOutline /></div>
                    <div className="text">Play All</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-about"><FaRecordVinyl /></div>
                    <div className="text">Record</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-about"><BiStopCircle /></div>
                    <div className="text">Stop</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-about"><BiPlayCircle /></div>
                    <div className="text">Play Record</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-about"><FaStopCircle /></div>
                    <div className="text">Stop Record</div>
                </div>
            </div>
        </Modal>
    )
}

export default About
