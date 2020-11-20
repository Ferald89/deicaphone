import React from 'react';
import { Link } from 'react-router-dom';

import './styles/MachinesList.css';
import noimagen from '../images/noimagen.jpg'
// import Gravatar from './Gravatar';

class MAchinesListItem extends React.Component {
  render() {

    if(!(this.props.machine.picture)){
      return (
        <div className="MachinesListItem">
  
          <img className="MachineImg" src={noimagen} alt="imagen"/>
  
          <div>
            <strong>
              Nombre De Máquina: {this.props.machine.name}<br />
              Número De Serie: {this.props.machine.serial_number}
            </strong>
            <br />
            Modelo: {this.props.machine.model}
            <br />
            Acerca de :{this.props.machine.about}<br />
          </div>
         </div>
      );
    }
    return (
      <div className="MachinesListItem">
        <div>
        <img className="MachineImg" src={this.props.machine.picture} alt="machineimage"/>
        </div>

        <div>
          <strong>
            Nombre De Máquina: {this.props.machine.name}<br />
            Número De Serie: {this.props.machine.serial_number}
          </strong>
          <br />
          Modelo: {this.props.machine.model}
          <br />
          Acerca de :{this.props.machine.about}<br />
        </div>
       </div>
    );
  }
}

class MachinesList extends React.Component {
  render() {
    if (this.props.machines.length === 0) {

      return (
        <div>
          <h3>Máquinas no encontradas</h3>
          {/* <Link className="btn btn-primary" to="/machines/new">
            Crear nueva Máquina
          </Link> */}
        </div>
      );
    }

    return (
      <div className="MachinesList">
        <ul className="list-unstyled">
          {this.props.machines.map(machine => {
            return (
              <li key={machine.serial_number}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/feed/machines/${machine.serial_number}`}
                >
                  <MAchinesListItem machine={machine} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MachinesList;