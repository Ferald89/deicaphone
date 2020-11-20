import React from 'react';
import Navbar from './Navbarlogin';

function Layoutlogin(props){
    return(
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    );
}

export default Layoutlogin;
