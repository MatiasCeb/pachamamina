import React from "react";
import products from "./shared/products";
import ProjectCard from "./ProjectCard";
import "./styles/SessionSection.css";
import logo from "../components/assets/icons/devicon.png";



const SessionSection = () => {
    return (
        <section id="SessionSection" className="session-section--container">
            <div className="session-section--button-container">
                <a href="https://wa.me/5493425105622" rel="noopener noreferrer" target="_blank" className="session-section--button">Empieza hoy</a>
            </div>
            <h2 className="session-section--container--h2">Comienza tu viaje aquí...</h2>
        </section>
    )
};

export default SessionSection;