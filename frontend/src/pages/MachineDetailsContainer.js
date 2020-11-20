import React from 'react';

import MachineDetails from './MachineDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';


class MachineDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    service: undefined,
    manual: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    
    console.log(this.props.match.params.machineserial_number);
    try {
      const data = await api.badges.read(this.props.match.params.machineserial_number);
      // console.log(data.body.manual);
      
      const services = await api.badges.readservice(this.props.match.params.machineserial_number);
      this.setState({ loading: false, data: data.body, services: services});
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return (
          <div>

              <PageLoading />
          </div>
        );
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return <MachineDetails machine={this.state.data} services={this.state.services}/>;
  }
}

export default MachineDetailsContainer;