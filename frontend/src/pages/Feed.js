import React from "react";


// Local
import './styles/Machines.css';
import PageLoading from '../components/PageLoading';
import MachinesList from '../components/MachinesList';
import api from '../api'
import PageError from '../components/PageError';
import Navbar from '../components/Navbar'

class Feed extends  React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined
      };

      componentDidMount(){
        this.fetchData()
      }

      fetchData = async () => {
        this.setState({loading: true, error: null});

        try {
          const data = await api.badges.list();
          this.setState({data: data});
          if (data.status){
            this.setState({loading: false})
          }
          else{
            this.setState({loading: false, error: data.body});
            console.log(this.state.error)
          }
        }
        catch (error){
          this.setState({loading: false, error: error});
        }
      }

    render(){
        if(this.state.loading===true){
                return <PageLoading />;
            }

        if(this.state.error){
          return (
            <div>
              <PageError error = {this.state.error}/> 
            </div>);
        }

        return(
            <React.Fragment>
              {/* <Navbar/> */}
                <div className="Machines">
                    <div className="Machines__container">
                        {/* <div className="Machines__buttons">
                            <Link to="/machines/new" className="btn btn-primary">
                                Agregar Máquina
                            </Link>
                        </div> */}
                    </div>
                    <MachinesList machines={this.state.data.body.results}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Feed;
