import React from 'react';

// Local
import './styles/Home.css';
import platziconfLogoImage from '../images/logod.svg';
import astronautsImage from '../images/hero-image.svg';
import LoginForm from '../components/LoginForm';
import api from '../api';
import MiniLoader from '../components/MiniLoader';
import Navbar from '../components/Navbarlogin'

class Home extends React.Component{
  state = {
    loading: false,
    form : {
      email: '',
      password: '',
    },
    error:null,
    access_token: '',
  };

  handleChange = e => {
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
      const data = await api.badges.login(this.state.form);
      this.setState({loading: false, access_token: ""});
      // console.log(data)
      if (data.status){
        // console.log(data.body.acces_token);
        this.setState({access_token: data.body.acces_token})
        localStorage.setItem('access_token', data.body.acces_token);
        this.props.history.push('/feed');
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
            <div className="Home">
            <div className="container">
              <div className="row">
                <div className="Home__col col-12 col-md-4">
                  <img
                    src={platziconfLogoImage}
                    alt="Deica Logo"
                    className="img-fluid mb-2"
                  />
    
                  <h1>Sistema De Servicios de Mantenimiento</h1>
                  <LoginForm
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  formValues={this.state.form}
                  error={this.state.error}
                  />
                  {this.state.loading && <MiniLoader />}
                {/* <p className="Home_signup">¿Aún no tienes cuenta?   
                    <Link to="/signup">
                        Registrate
                    </Link>
                </p> */}
                </div>
    
                <div className="Home__col d-none d-md-block col-md-8">
                  <img
                    src={astronautsImage}
                    alt="Astronauts"
                    className="img-fluid p-10"
                    height="50%"
                    width="50%"
                  />
                </div>
              </div>
            </div>
          </div>
          </React.Fragment>
        )
    }
}

export default Home;