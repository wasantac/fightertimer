import React,{useState} from 'react';
import logo from './logo.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Timer from './components/Timer';
import Outro from './components/Outro';
function App() {
  const [game,setGame] = useState("db");
  let triangles = [];

  let handleGame = (g) => {
    setGame(g);  
  }
  for(let i = 0; i < 25 ; i++){
    triangles.push(<span className="triangle" key={i}></span>)
  }
  return (
    <div className="App">
      {game === "db" ?       
      <div className="wrapper">
      {triangles.map(item =>{ 
        return item
      })} 
      </div>   :
            <div className="wrapper-gg">
              <span className="square"></span>
              <span className="square"></span>
            </div>   }       
      <Router>
        <Switch>
          <Route exact path="/">
            <Timer logo={logo} game={handleGame}></Timer>
          </Route>
          <Route exact path="/outro">
            <Outro logo={logo}></Outro>

          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
