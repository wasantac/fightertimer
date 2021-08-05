import React from 'react';
import goku from '../assets/goku.png'
import sol from '../assets/sol.png';
import ryu from '../assets/ryu.png';
const Gamefondo = ({game,outro}) => { 
    let renderSwitch = () => {
        if(outro){
            return      <div className="wrapper">
            <img src={goku} alt="" className="character character-out"></img>
            <img src={sol} alt="" className="character character-out"></img>
            <img src={ryu} alt="" className="character character-out"></img>
        </div> ;
        }
        else{
            return      <div className="wrapper">
            <img src={goku} alt="" className="character"></img>
            <img src={sol} alt="" className="character"></img>
            <img src={ryu} alt="" className="character"></img>
        </div> ;
        }
    }
    return (
        <React.Fragment>
            {renderSwitch()}
        </React.Fragment>
    );
}

export default Gamefondo;
