import React from "react";
import products from "./shared/products";
import ProjectCard from "./ProjectCard";
import "./styles/SessionSection.css";
import logo from "../components/assets/icons/devicon.png";



const SessionSection = () => {
    return (
        <section className="session-section--container">
            <div className="session-section--button-container">
                <a href="/" rel="noopener noreferrer" target="_blank" className="session-section--button">Start Here</a>
            </div>
            <h2 className="session-section--container--h2">Begin Your Journey Here...</h2>
        </section>
    )
};

export default SessionSection;