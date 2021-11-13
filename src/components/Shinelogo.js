import React from 'react';
const Shinelogo = ({ logo }) => {
    return (
        <div className="shine">
            <img src={logo} alt="logo" className="logoshine" width="200px" height="auto"></img>
        </div>
    );
}

export default Shinelogo;
