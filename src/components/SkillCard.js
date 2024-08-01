import React from "react";
import '@justinribeiro/lite-youtube';

const SkillCard = (props) => {
    const {skill} = props;

    return (
        <div className="youtube-item">
            <p className="card-item__details--title">{skill.title}</p>
            <p className="card-item__details--title">{skill.text}</p>
            <lite-youtube
                videoid={skill.videoId}
                tabindex="0"
                aria-label="button"
            >
                <a
                    href={`https://youtube.com/watch?v=${skill.videoId}`}
                    class="lty-playbtn"
                    title={skill.title}
                    role="button"
                    tabindex="0"
                >
                    <span class="lyt-visually-hidden">{skill.title}</span>
                </a>
            </lite-youtube>
        </div>
    )
}

export default SkillCard;