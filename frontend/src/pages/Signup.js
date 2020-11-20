import React from 'react';

import './styles/Signup.css'
import platziconfLogoImage from '../images/logod.svg';
import SignupForm from '../components/SignupForm';
import api from '../api';
import MiniLoader from '../components/MiniLoader';
import Navbar from '../components/Navbar';





class Signup extends React.Component{
    state = {
        loading: false,
        form :{
            email: '',
            username: '',
            phone_number: '',
            password: '',
            password_confirmation: '',
            first_name: '',
            last_name: '',
        },
        error: null,
        access_token: '',
    };

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e =>{
        e.preventDefault();
        this.setState({loading: true, error: true});

        try{
            const data = await api.badges.signup(this.state.form);
            this.setState({loading: false});
            if (data.status){
            //   this.setState({access_token: data.body.access_token})
            //   localStorage.setItem('access_token', this.state.access_token);
              this.props.history.push('/');
            }else{
              const error = data.body;
              this.setState({error: error});
              console.log(error);
            }
      
          } catch (error) {
            this.setState({loading: false, error: error});
          }

    }

    render(){
        return(
            <React.Fragment>
            <Navbar />
                <div className="Signup">
                    <div className="container">
                        <div className="Signup__col">
                        <img
                        src={platziconfLogoImage}
                        alt="Deica Logo"
                        className="Signup_img"
                        />
                        <h1>Registro</h1>
                        <SignupForm
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}
                        />
                        {this.state.loading && <MiniLoader />}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Signup;
