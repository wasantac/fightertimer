import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import {
    useLocation
} from "react-router-dom";
import Particles from './Particles';
import '../styles/outro.css'
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Outro = ({ logo, setgame }) => {
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
        <div className="fondo-gogo">
            <Particles></Particles>
            <Col>
                <img src={logo} alt="logo" className="img-gogo"></img>
            </Col>
        </div>
    );
}

export default Outro;
