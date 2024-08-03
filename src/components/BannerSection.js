import React from "react";
import "./styles/BannerSection.css";
import BannerSep from "./BannerSep";


const BannerSection = () => {
    return(
        <div className="banner-section--container">
            {/* <div className="header--img" alt="" /> */}
            <div className="banner-section--title-container">
                <h1 className="header--title-h1">Imagine what you could do with your life if you believed in yourself?</h1>
                <BannerSep />
                <p className="header--title-p">Let me show you the path that will lead you toward the dream you imagine. Better yet, choose the path (or paths) that works best for the life you want to live.</p>
            </div>
        </div>
    )
};

export default BannerSection;