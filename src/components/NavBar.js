import React from "react";
import "./styles/NavBar.css"
import logo from "../components/assets/icons/devicon.png";
import github from "../components/assets/icons/icons8-github-white-30px.png";

class Navbar extends React.Component {
    render() {
        return (
        <div className="Navbar">
                <div classNAme="section--left">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                    <span className="Header-name">Pacha</span>
                    <span className="Header-lastname">Mamina</span>
                </div>
                <div className="section--right">
                    <span className="NavBar-item">Agenda tu sesión</span>
                    <span className="NavBar-item">Empieza hoy</span>
                    <span className="NavBar-item">Youtube</span>
                    <span className="NavBar-item">Spotify</span>
                    {/* <div><a href="https://www.instagram.com/matiasceb/" rel="noopener noreferrer" target="_blank"><img className="navbar--img" src={github} alt="Logo" /></a></div>
                    <div><a href="https://www.linkedin.com/in/matías-ceballos-424001182/" rel="noopener noreferrer" target="_blank"><img className="navbar--img" src={github} alt="Logo" /></a></div>
                    <div><a href="https://github.com/MatiasCeb" rel="noopener noreferrer" target="_blank"><img className="navbar--img" src={github} alt="Logo" /></a></div> */}
            </div>
        </div>
        )
    }
}

export default Navbar;