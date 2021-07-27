import React from 'react';

const Gamefondo = ({game}) => { 
    let triangles = [];
    for(let i = 0; i < 25 ; i++){
      triangles.push(<span className="triangle" key={i}></span>)
    }
    let renderSwitch = () => {
        switch(game){
            case 'db':{
                return      <div className="wrapper">
                {triangles.map(item =>{ 
                  return item
                })} 
                </div> ;
            }
            case 'gg':{
                return <div className="wrapper-gg">
                <span className="square"></span>
                <span className="square"></span>
                    </div> ;
            }
            default:{
                return ""
            }
        };
    }
    return (
        <React.Fragment>
            {renderSwitch()}
        </React.Fragment>
    );
}

export default Gamefondo;
