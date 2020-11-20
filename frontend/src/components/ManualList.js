import React from 'react';

// import './styles/MachinesList.css';

class ManualListItem extends React.Component {
  render() {
    return (
      <div className="container-xm MachinesListItem">
        <div className="row">
            <div className="col">
                <strong>
                    {this.props.manual.name}
                </strong>
            </div>
            <div className="col-">
                <a className="btn btn-primary" href={this.props.manual.file}>download</a>
            </div>
        </div>
       </div>
    );
  }
}

class ManualList extends React.Component {
    render() {
    if (this.props.manuals.length === 0) {
    //   console.log(this.props.s);
      return (
        <div>
          <h3>No hay documentos</h3>
        </div>
      );
    }

    return (
      <div className="servicesList">
        <ul className="list-unstyled">
          {this.props.manuals.map(manual => {
            //   console.log(manual.id)
            return (
              <li key={manual.id}>
                  <ManualListItem manual={manual} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ManualList;