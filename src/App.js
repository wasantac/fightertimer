import logo from './logo.png';
import './App.css';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import {Container,Col,Row} from 'reactstrap';
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <h1 className="timer empezando">Empezando</h1>;
  }
  <i class="fa fa-quote-left" aria-hidden="true"></i> 
  let minutes = Math.floor(remainingTime / 60)
  let seconds = remainingTime % 60

  if(minutes > 0){
    if(seconds < 10){
      seconds = `0${seconds}`
    }
    if(minutes < 10){
      minutes = `0${minutes}`
    }
    return (
      <div className="timer">
      <div className="d-flex align-items-center flex-column timer">El directo está <br></br>apunto de empezar</div>
        <h1 className="value">{`${minutes}:${seconds}`}</h1>
      </div>
    );
  }else{
    return (
      <div className="timer">
        <div className="d-flex align-items-center flex-column h3">El directo está <br></br>apunto de empezar</div>
        <h1 className="value">{`${seconds}`}</h1>
      </div>
    );
  }
};
function App() {
  let triangles = [];
  for(let i = 0; i < 25 ; i++){
    triangles.push(<span className="triangle" key={i}></span>)
  }
  return (
    <div className="App">
          {triangles.map(item =>{ 
            return item
          })}
        <Container className="up bg-transparent">

          <Row>
            <Col sm={6}>
              <img src={logo} alt="logo" width="auto" height="700rem" className="logoF"></img>
            </Col>
            <Col sm={6} className="d-flex align-items-center justify-content-center">
            <CountdownCircleTimer
              isPlaying
              duration={90}
              size="400"
              trailColor="$FFFFFF"
              colors={[["#FEBF1A"],["#F59D1D"],["#F37A1E"]]}
              onComplete={() => [true,6000000]}
            >
              {renderTime}
            </CountdownCircleTimer>
            </Col>
          </Row>
        </Container>

    </div>
  );
}

export default App;
