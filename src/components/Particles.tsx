import React from "react";
import "../styles/particles.scss";

const Particles = () => {
    let circles = [];
    for (let i = 0; i < 49; i++) {
        circles.push(<span className="circle" key={i}></span>);
    }
    return (
        <div className="particles-bg">
            {circles.map((item) => {
                return item;
            })}
        </div>
    );
};

export default Particles;
