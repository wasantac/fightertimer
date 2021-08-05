import React,{useState} from 'react';
import logo from './593logo.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Timer from './components/Timer';
import Outro from './components/Outro';
import Gamefondo from './components/Gamefondo';
import Shinelogo from './components/Shinelogo';
function App() {
  const [game,setGame] = useState("db");

  let handleGame = (g) => {
    setGame(g);  
  }

  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Gamefondo game={game} outro={false}/>
            <Timer logo={logo} setgame={handleGame} game={game}></Timer>
          </Route>
          <Route exact path="/outro">
          <Gamefondo game={game} outro={true}/>
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
