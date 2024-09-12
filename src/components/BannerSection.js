import React from "react";
import "./styles/BannerSection.css";
import BannerSep from "./BannerSep";


const BannerSection = () => {
    return(
        <div id="BannerSection" className="banner-section--container">
            {/* <div className="header--img" alt="" /> */}
            <div className="banner-section--title-container">
                <h1 className="header--title-h1">Imagina lo que podrías ser ahora.</h1>
                <BannerSep />
                <p className="header--title-p">Quiero compartirte una forma distinta de ver la vida que te rodea, en presencia y armonía.</p>
            </div>
        </div>
    )
};

export default BannerSection;