import React from "react";
import "./styles/Header.css";


const Header = () => {
    return(
        <div className="header">
            {/* <div className="header--img" alt="" /> */}
            <div className="header--title-container">
                <h1 className="header--title-h1">Bienvenido!</h1>
                <p className="header--title-p">Web en desarrollo</p>
            </div>
        </div>
    )
};

export default Header;