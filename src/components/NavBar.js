import React from "react";
import "./styles/NavBar.css"
import youtubeIcon from "../components/assets/icons/icons8-youtube-play-50.png"
import whatsappIcon from "../components/assets/icons/icons8-whatsapp-50.png"
import tiktokIcon from "../components/assets/icons/icons8-tik-tok-50.png"
import instagramIcon from "../components/assets/icons/icons8-instagram-50.png"
import facebookIcon from "../components/assets/icons/icons8-facebook-nuevo-50.png"
import spotifyIcon from "../components/assets/icons/icons8-spotify-50.png"

class Navbar extends React.Component {
    render() {
        return (
        <div className="Navbar">
            <div className="headerBar">
                <div className="NavBar-section--left">
                    <span className="Header-name">Pacha</span>
                    <span className="Header-lastname">Mamina</span>
                </div>
                <div className="NavBar-section--right">
                    <div><a href="https://www.youtube.com/@pachamamina" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={youtubeIcon} alt="Logo" /></a></div>
                    <div><a href="https://wa.me/5493425105622" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={whatsappIcon} alt="Logo" /></a></div>
                    <div><a href="https://www.tiktok.com/@pacha.mamina?_t=8mx6ysfzdxt&_r=1" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={tiktokIcon} alt="Logo" /></a></div>
                    <div><a href="https://www.instagram.com/pacha.mamina" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={instagramIcon} alt="Logo" /></a></div>
                    <div><a href="https://www.facebook.com/pachamamina" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={facebookIcon} alt="Logo" /></a></div>
                    <div><a href="https://podcasters.spotify.com/pod/show/pachamamina" rel="noopener noreferrer" target="_blank"><img className="navbar--icon" src={spotifyIcon} alt="Logo" /></a></div>
                </div>
            </div>
            <div className="NavBar-section">
                    <a href="#BannerSection" className="NavBar-item">Empieza hoy</a>
                    <a href="#SessionSection" className="NavBar-item">Agenda tu sesión</a>
                    <a href="#YoutubeSection" className="NavBar-item">Videos</a>
                    <a href="#PodcastSection" className="NavBar-item">Podcast</a>
            </div>
        </div>
        )
    }
}

export default Navbar;