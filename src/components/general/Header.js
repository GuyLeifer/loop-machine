import { useState } from "react";
import './Header.css';
import About from './About';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Header() {

    const [about, setAbout] = useState(false);

    return (
        <div className="header" >
            <span>Loop Machine</span>
            <div className="about">
                <AiOutlineInfoCircle onClick={() => setAbout(prev => !prev)} />
            </div>
            {about && <About isOpen={about} setIsOpen={setAbout} />}
        </div>
    )
}

export default Header
