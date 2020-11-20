import React from 'react';

class MachineForm extends React.Component {
//   state = {};

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

  handleClick = e => {
    console.log('Button was clicked');
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('Form was submitted');
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="name"
              value={this.props.formValues.name}
            />
          </div>

          <div className="form-group">
            <label>Serial Number</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="serial_number"
              value={this.props.formValues.serial_number}
            />
          </div>

          <div className="form-group">
            <label>Model</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="model"
              value={this.props.formValues.model}
            />
          </div>

          <div className="form-group">
            <label>Descripción</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="about"
              value={this.props.formValues.about}
            />
          </div>

          <div className="form-group">
            <label>Proximo Sericio</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="next_service"
              value={this.props.formValues.next_servicex}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          {this.props.error && (<p>{this.props.error.message}</p>)}
        </form>
      </div>
    );
  }
}

export default MachineForm;
