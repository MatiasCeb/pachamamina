import React from "react";
import { skills } from "./shared/skills";
import SkillCard from "./SkillCard";
// import "./styles/PodcastSection.css";
import "./styles/YoutubeSection.css";


const YoutubeSection = () => {
    return(
        <div id="YoutubeSection" className="youtube--section-container">
            {skills.map((skill) =>              
                <SkillCard key={skill.id} skill={skill}/>)
            }
        </div>
    )
};

export default YoutubeSection;