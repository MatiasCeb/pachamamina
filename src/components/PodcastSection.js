import React from "react";
import { skills } from "./shared/skills";
import SkillCard from "./SkillCard";
// import "./styles/YoutubeSection.css";
import "./styles/PodcastSection.css";


const PodcastSection = () => {
    return(
        <div id="PodcastSection" className="podcast-section--container">
            <h3 className="podcast-section--title--h3">Podcast</h3>
            <iframe src="https://podcasters.spotify.com/pod/show/pachamamina/embed/episodes/3-REGLAS-FUNDAMENTALES-PARA-VIVIR-EN-PAZ-e2mmflc" 
            className="podcast-section--iframe" frameborder="0" scrolling="no"></iframe>
            <iframe src="https://podcasters.spotify.com/pod/show/pachamamina/embed/episodes/TE-RETO-POR-24-HORAS----ACEPTAS-e2mmfkf/a-abf9860" 
            className="podcast-section--iframe" frameborder="0" scrolling="no"></iframe>
            <iframe src="https://podcasters.spotify.com/pod/show/pachamamina/embed/episodes/CUNTAS-VECES-MORISTE-e2mmf2t/a-abf97j4" 
            className="podcast-section--iframe" frameborder="0" scrolling="no"></iframe>
        </div>
    )
};

export default PodcastSection;