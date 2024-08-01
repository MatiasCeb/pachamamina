import React from "react";
import { skills } from "./shared/skills";
import SkillCard from "./SkillCard";
import StyledSkills from "./styles/StyledSkills";
import "./styles/YoutubeSection.css";


const YoutubeSection = () => {
    return(
        <div className="youtube--section-container">
            {skills.map((skill) =>              
                <SkillCard key={skill.id} skill={skill}/>)
            }
        </div>
        // <div className="header">
        //     {/* <div className="header--img" alt="" /> */}
        //     <div className="header--title-container">
        //         <h1 className="header--title-h1">Welcome! I´m Matías Ceballos</h1>
        //         <p className="header--title-p">Frontend Developer</p>
        //         <StyledSkills>
        //             {skills.map((skill) =>              
        //                 <SkillCard key={skill.id} skill={skill}/>)}
        //         </StyledSkills>
        //         <p className="header--title-p">Frontend Developer</p>
        //         {skills.map((skill) =>              
        //                 <SkillCard key={skill.id} skill={skill}/>)}
        //     </div>
        // </div>
    )
};

export default YoutubeSection;