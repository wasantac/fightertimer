import React from "react";
import { Col } from "reactstrap";
import Particles from "../Particles";
import "../../styles/outro.scss";

type Props = {
    logo: string;
};

const Outro: React.FC<Props> = (props) => {
    const { logo } = props;
    return (
        <div className="fondo-gogo">
            <Particles></Particles>
            <Col>
                <img src={logo} alt="logo" className="img-gogo"></img>
            </Col>
            <div className="text-white final-texto">
                ¡Gracias Por ver el directo!
            </div>
        </div>
    );
};

export default Outro;
