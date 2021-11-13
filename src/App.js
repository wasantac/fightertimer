import React, { useState } from 'react';
import logo from './assets/GoGoNBG.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Timer from './components/Timer';
import Outro from './components/Outro';
import Shinelogo from './components/Shinelogo';
function App() {
  const [game, setGame] = useState("gg");

  let handleGame = (g) => {
    setGame(g);
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Timer logo={logo} setgame={handleGame} game={game}></Timer>
          </Route>
          <Route exact path="/outro">
            <Outro logo={logo} setgame={handleGame}></Outro>
          </Route>
          <Route exact path="/logo">
            <Shinelogo logo={logo}></Shinelogo>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
