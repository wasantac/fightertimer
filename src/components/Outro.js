import React,{useState,useEffect} from 'react';
import {Col} from 'reactstrap';
import {
    useLocation
  } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Outro = ({logo,setgame}) => {
    let query = useQuery();
    const [load,setLoad] = useState(false);
    useEffect(() => {
        if(!load){
            if(query.get("game")){
              setgame(query.get("game"))
            }
            setLoad(true);
        }
    },[load,query,setgame])
    return (
        <Col>
        <img src={logo} alt="logo" width="auto" height="700rem" className="logoF"></img>
        </Col>
    );
}

export default Outro;
