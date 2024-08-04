import React from "react";
import '@justinribeiro/lite-youtube';
import "./styles/SkillCard.css";
import Button from "./Button";

const SkillCard = (props) => {
    const {skill} = props;

    return (
        <div className="youtube-item">
            <div className="youtube-item--description">
                <h3 className="youtube-item--description--h3">{skill.title}</h3>
                <p className="youtube-item--description--p">{skill.text}</p>
                <div className="youtube-item--description--button--container">
                    <Button />
                </div>
            </div>
            <div className="lite-youtube--container">
                <lite-youtube
                    videoid={skill.videoId}
                    tabIndex="0"
                    aria-label="button"
                    style={{width: '80vw', 'max-width': '600px', 'border-radius': '25px'}}
                >
                    <a
                        className="lty-playbtn"
                        href={`https://youtube.com/watch?v=${skill.videoId}`}
                        title={skill.title}
                        role="button"
                        tabIndex="0"
                    >
                        <span>{skill.title}</span>
                    </a>
                </lite-youtube>
            </div>
        </div>
        // <div className="item">
        //     <div className="item-description">
        //         <p>{skill.title}</p>
        //         <p>{skill.text}</p>
        //     </div>
        //     <div className="item-video">
        //         <div className="lite-youtube--container">
        //             <lite-youtube
        //                 videoid={skill.videoId}
        //                 tabIndex="0"
        //                 aria-label="button"
        //                 style={{width: '200px', height: '200px'}}
        //             >
        //                 <a
        //                     className="lty-playbtn"
        //                     href={`https://youtube.com/watch?v=${skill.videoId}`}
        //                     title={skill.title}
        //                     role="button"
        //                     tabIndex="0"
        //                 >
        //                     <span>{skill.title}</span>
        //                 </a>
        //             </lite-youtube>
        //         </div>
        //     </div>
        // </div>
    )
}

export default SkillCard;