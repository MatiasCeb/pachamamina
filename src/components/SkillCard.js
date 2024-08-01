import React from "react";
import '@justinribeiro/lite-youtube';
import "./styles/SkillCard.css";

const SkillCard = (props) => {
    const {skill} = props;

    return (
        <div className="youtube-item">
            <div className="youtube-item--description">
                <p>{skill.title}</p>
                <p>{skill.text}</p>
            </div>
            <div className="lite-youtube">
                <lite-youtube
                    videoid={skill.videoId}
                    tabindex="0"
                    aria-label="button"
                >
                    <a
                        className="lty-playbtn"
                        href={`https://youtube.com/watch?v=${skill.videoId}`}
                        title={skill.title}
                        role="button"
                        tabindex="0"
                    >
                        <span>{skill.title}</span>
                    </a>
                </lite-youtube>
            </div>
        </div>
    )
}

export default SkillCard;