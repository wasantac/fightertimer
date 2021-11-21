import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Container, Col, Row } from 'reactstrap';
import {
  useLocation
} from "react-router-dom";
import Particles from './Particles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <h1 className="timer empezando">Empezando</h1>;
  }
  <i className="fa fa-quote-left" aria-hidden="true"></i>
  let minutes = Math.floor(remainingTime / 60)
  let seconds = remainingTime % 60

  if (minutes > 0) {
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    return (
      <div className="timer">
        <div className="d-flex align-items-center flex-column timer">El directo está <br></br>apunto de empezar</div>
        <h1 className="value">{`${minutes}:${seconds}`}</h1>
      </div>
    );
  } else {
    return (
      <div className="timer">
        <div className="d-flex align-items-center flex-column h3">El directo está <br></br>apunto de empezar</div>
        <h1 className="value">{`${seconds}`}</h1>
      </div>
    );
  }
};
const Timer = ({ logo, game, setgame }) => {
  let query = useQuery();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (!load) {
      if (query.get("game")) {
        setgame(query.get("game"))
      }
      setLoad(true);
    }
  }, [load, query, setgame])
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center fondo-div ">
      <Particles></Particles>
      <Container className="up bg-transparent">
        <Row>
          <Col sm={6} md={6}>
            <img src={logo} alt="logo" width="auto" height="900rem" className="img-fluid"></img>
          </Col>
          <Col sm={6} md={6} className="d-flex align-items-center justify-content-center">
            <div className="circulo">
              <CountdownCircleTimer
                isPlaying
                duration={300}
                size="350"
                trailColor="$FFFFFF"
                colors={"#ef233c"}
                onComplete={() => [true, 6000000]}
              >
                {renderTime}
              </CountdownCircleTimer>
            </div>

          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Timer;
