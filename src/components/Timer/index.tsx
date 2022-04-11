import React from "react";
import { Container, Col, Row } from "reactstrap";
import Particles from "../Particles";
import Wave from "../Wave";
import Counter from "./Counter";
import "./index.scss";
type Props = {
    logo: string;
    seconds: number;
};

const Timer: React.FC<Props> = (props) => {
    const { logo, seconds } = props;

    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center fondo-div ">
            <Particles></Particles>
            <Wave></Wave>
            <Container className="up bg-transparent">
                <Row>
                    <Col sm={4} md={4}>
                        <img
                            src={logo}
                            alt="logo"
                            width="auto"
                            height="500rem"
                            className="img-fluid"
                        ></img>
                    </Col>
                    <Col sm={4} md={4}></Col>
                    <Col
                        sm={4}
                        md={4}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <Counter seconds={seconds}></Counter>
                    </Col>
                </Row>
            </Container>
            <div className="live-text">
                En Vivo<span>&#9679;</span>
            </div>
        </div>
    );
};

export default Timer;
