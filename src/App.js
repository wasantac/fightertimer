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
import Gamefondo from './components/Gamefondo';
function App() {
  const [game,setGame] = useState("db");

  let handleGame = (g) => {
    setGame(g);  
  }

  return (
    <div className="App">
      <Gamefondo game={game}/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Timer logo={logo} setgame={handleGame} game={game}></Timer>
          </Route>
          <Route exact path="/outro">
            <Outro logo={logo} setgame={handleGame}></Outro>

          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
