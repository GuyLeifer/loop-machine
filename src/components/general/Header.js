import { useState } from "react";
import './Header.css';
import Information from './Information';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Header() {

    const [information, setInformation] = useState(false);

    return (
        <div className="header" >
            <span>Loop Machine</span>
            <div className="about">
                <AiOutlineInfoCircle onClick={() => setInformation(prev => !prev)} />
            </div>
            {information && <Information isOpen={information} setIsOpen={setInformation} />}
        </div>
    )
}

export default Header
