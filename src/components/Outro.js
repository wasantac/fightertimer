import React from 'react';
import {Col} from 'reactstrap';
const Outro = ({logo}) => {
    return (
        <Col>
        <img src={logo} alt="logo" width="auto" height="700rem" className="logoF"></img>
        </Col>
    );
}

export default Outro;
