import React from "react";
import "./styles/Footer.css"
import youtubeIconWhite from "../components/assets/icons/icons8-youtube-play-50-white.png"
import whatsappIconWhite from "../components/assets/icons/icons8-whatsapp-50-white.png"
import tiktokIconWhite from "../components/assets/icons/icons8-tik-tok-50-white.png"
import instagramIconWhite from "../components/assets/icons/icons8-instagram-50-white.png"
import facebookIconWhite from "../components/assets/icons/icons8-facebook-nuevo-50-white.png"
import spotifyIconWhite from "../components/assets/icons/icons8-spotify-50-white.png"

class Footer extends React.Component {
    render() {
        return (
        <div className="footer--container">
            <div className="footer--container--section-left">
                <span className="Header-name">Pacha</span>
                <span className="Header-lastname">Mamina</span>
            </div>
            <div className="section--right">
                <div><a href="https://www.youtube.com/@pachamamina" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={youtubeIconWhite} alt="Logo" /></a></div>
                <div><a href="https://wa.me/5493425105622" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={whatsappIconWhite} alt="Logo" /></a></div>
                <div><a href="https://www.tiktok.com/@pacha.mamina?_t=8mx6ysfzdxt&_r=1" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={tiktokIconWhite} alt="Logo" /></a></div>
                <div><a href="https://www.instagram.com/pacha.mamina" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={instagramIconWhite} alt="Logo" /></a></div>
                <div><a href="https://www.facebook.com/pachamamina" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={facebookIconWhite} alt="Logo" /></a></div>
                <div><a href="https://podcasters.spotify.com/pod/show/pachamamina" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={spotifyIconWhite} alt="Logo" /></a></div>
            </div>
        </div>
        )
    }
}

export default Footer;