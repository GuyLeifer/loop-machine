import React from 'react';
import './Information.css';
import Modal from 'react-modal';

// icons
import { FaStopCircle, FaRecordVinyl } from "react-icons/fa";
import { BiPlayCircle, BiStopCircle } from "react-icons/bi";
import { TiThSmallOutline } from "react-icons/ti";
import { FaPowerOff } from "react-icons/fa";
import slider from './images/slider.png';

function About({ isOpen, setIsOpen }) {

    return (
        <Modal
            className="content"
            overlayClassName="overlay"
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
        >
            <h2>Information</h2>
            <div>
                <div className="infoIcon">
                    <div className="icon-info"><FaPowerOff /></div>
                    <div className="text">Loop Start</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-info"><TiThSmallOutline /></div>
                    <div className="text">Play All</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-info"><FaRecordVinyl /></div>
                    <div className="text">Record</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-info"><FaRecordVinyl className="recording" /></div>
                    <div className="text">Stop Record</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-info"><BiStopCircle /></div>
                    <div className="text">Stop</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-info"><BiPlayCircle /></div>
                    <div className="text">Play Record</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-info"><FaStopCircle /></div>
                    <div className="text">Stop Record</div>
                </div>
                <div className="infoIcon">
                    <div className="icon-info"><img className="slider-img" src={slider} alt="Slider" /></div>
                    <div className="text">Loop Speed Slider</div>
                </div>
            </div>
        </Modal>
    )
}

export default About
