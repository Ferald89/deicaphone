import React from 'react';

// import './styles/MachinesList.css';

class ServicesListItem extends React.Component {
  render() {
    return (
      <div className="MachinesListItem">
        <div>
          <strong>
              {this.props.service.name}
          </strong>
          <br />
          {this.props.service.about}
          <br />
          {this.props.service.service_date}
        </div>

       </div>
    );
  }
}

class ServicesList extends React.Component {
  render() {
    if (this.props.services.length === 0) {
      console.log(this.props.services.length);
      return (
        <div>
          <h3>Sin Servicios</h3>
        </div>
      );
    }

    return (
      <div className="servicesList">
        <ul className="list-unstyled">
          {this.props.services.map(service => {
            return (
              <li key={service.id}>
                  {service.is_active && this.props.is_active &&
                  <ServicesListItem service={service} />
                  }
                  {!service.is_active && !this.props.is_active &&
                  <ServicesListItem service={service} />
                  }
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ServicesList;