import React from "react";
import fbIcon from "../images/icon-facebook.svg";
import pintIcon from "../images/icon-pinterest.svg";
import instIcon from "../images/icon-instagram.svg";

const Social = () => {
    return (
        <div className="container social">
            <img src={fbIcon} alt="Facebook icon" className="fb-icon"/>
            <img src={pintIcon} alt="Pinterest icon" className="pint-icon"/>
            <img src={instIcon} alt="Instagram icon" className="inst-icon"/>
        </div>
    )
}

export default Social;