import React from "react";
import Particles from "../Particles";
import "./index.scss";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
const Podcast = () => {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center fondo-div ">
            <Particles></Particles>
            <div className="barra-iconos d-flex align-items-center justify-content-center">
                <span className="icono">
                    <AiOutlineTwitter className="icono-tam "></AiOutlineTwitter>
                    <span>&nbsp;&#64;FriendzGogo</span>
                </span>
                <div className="empty-block"></div>
                <span className="icono">
                    <AiFillInstagram className="icono-tam "></AiFillInstagram>
                    <span>&nbsp;&#64;gogofriendz</span>
                </span>
            </div>
        </div>
    );
};

export default Podcast;
