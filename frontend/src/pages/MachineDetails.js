import React from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import Machine from '../components/machine';
import ManualList from '../components/ManualList';
import ServicesList from '../components/ServicesList';


function MachineDetails(props) {
  const machine = props.machine;
  const services = props.services.body.results;
  const manuals = props.machine.manual;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
                <h1> Nombre: {machine.machine.name}</h1>
            </div>
            <div className="col-7 BadgeDetails__hero-attendant-name">
              <h1>
                Modelo: {machine.machine.model}  <br/>
                 Serial: {machine.machine.serial_number}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-5">
            <Machine
              name={machine.machine.name}
              model={machine.machine.model}
              about={machine.machine.about}
              next_service={machine.machine.next_service}
              serial_number={machine.machine.serial_number}
              email={machine.user[0].email}
              name_user={machine.user[0].first_name}
              picture={machine.machine.picture}
            />
          </div>
          <div className="col-7">
              <h2>Manuales</h2>
              <ManualList manuals={manuals}/>
              <h2>Servicios no realizados</h2>
              <ServicesList services={services} is_active={true}/>
            <h2>Servicios realizados</h2>
            <div >
              <ServicesList services={services} is_active={false}/>
            </div>
            <div>

              {/* <div>
                <button className="btn btn-danger">Delete</button>
                {ReactDOM.createPortal(
                  <h1>Hola, realmente no estoy aquí</h1>,
                  document.getElementById('modal')
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineDetails;