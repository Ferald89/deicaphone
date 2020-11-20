import React from 'react';

// styles
// import './styles/BadgeNew.css';
// Local
import header from '../images/badge-header.svg';
import Machine from '../components/machine';
import MachineForm from '../components/MachineForm';
import PageLoading from '../components/PageLoading';

import api from '../api';

class MachineNew extends React.Component{
  state = {
    loading: false,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/feed');

    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

    render(){

      if(this.state.loading){
        return <PageLoading />;
      }
        return (
            <React.Fragment>
            <div className="BadgeNew__hero">
              <img className="img-fluid" src={header} alt="Logo" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <Machine
                    firstName={this.state.form.firstName || 'FIRST NAME'}
                    lastName={this.state.form.lastName || 'LAST NAME'}
                    twitter={this.state.form.twitter || 'TWITTER'}
                    jobTitle={this.state.form.jobTitle || 'JOB TITLE'}
                    email={this.state.form.email || 'EMAIL'}
                    avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                  />
                </div>
                <div>
                <h1>New Attendant</h1>
                  <MachineForm
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  formValues={this.state.form}
                  error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default MachineNew;