import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logod.svg'
import './styles/Navbar.css'

class Navbar extends React.Component{
    handleSubmit = async e =>{
        e.preventDefault();
        localStorage.clear();
        window.location.href = "/";
    }

    render(){
        return(
            <div className="Navbar" >
                <div className="container-fluid row Navbar_container">
                        {/* <div className="row containernav"> */}
                            <div className="col-10 containernav">
                                    <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                            </div>
                        </div>
                {/* </div> */}
            </div>
            );
        }
    };


export default Navbar;
