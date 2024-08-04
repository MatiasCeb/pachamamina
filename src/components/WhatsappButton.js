import React from "react";
import "./styles/WhatsappButton.css"
import whatsappIconPng from "../components/assets/icons/icons8-whatsapp-48.png"


class WhatsappButton extends React.Component {
    render() {
        return (
            <div className="whatsapp-section">
                <div><a href="https://wa.me/5493425105622" rel="noopener noreferrer" target="_blank"><img className="whatsapp--icon-png" src={whatsappIconPng} alt="Logo" /></a></div>
            </div>
        )
    }
}

export default WhatsappButton;