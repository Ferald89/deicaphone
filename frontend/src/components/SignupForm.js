import React from 'react';


class SignupForm extends React.Component{
    render(){
        return(
            <div>
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <input
                    onChange={this.props.onChange}
                    value={this.props.formValues.email}
                    name="email"
                    placeholder="email"
                    type="email"
                    />
                </div>
                {this.props.error && (<p className="text-danger">{this.props.error.email}</p>)}

                <div className="form-group">
                    <input
                    onChange={this.props.onChange}
                    value={this.props.formValues.username}
                    name="username"
                    placeholder="username"
                    type="text"
                    />
                </div>
                {this.props.error && (<p className="text-danger">{this.props.error.username}</p>)}


                <div className="form-group">
                    <input
                    onChange={this.props.onChange}
                    value={this.props.formValues.phone_number}
                    name="phone_number"
                    placeholder="telefono"
                    type="text"
                    />
                </div>
                {this.props.error && (<p className="text-danger">{this.props.error.phone_number}</p>)}


                <div className="form-group">
                    <input
                    onChange={this.props.onChange}
                    value={this.props.formValues.password}
                    name="password"
                    placeholder="contraseña"
                    type="password"
                    />
                </div>
                {this.props.error && (<p className="text-danger">{this.props.error.password}</p>)}


                <div className="form-group">
                    <input
                    onChange={this.props.onChange}
                    value={this.props.formValues.password_confirmation}
                    name="password_confirmation"
                    placeholder="contraseña"
                    type="password"
                    />
                </div>
                {this.props.error && (<p className="text-danger">{this.props.error.password_confirmation}</p>)}


                <div className="form-group">
                    <input
                    onChange={this.props.onChange}
                    value={this.props.formValues.first_name}
                    name="first_name"
                    placeholder="nombre"
                    type="text"
                    />
                </div>
                {this.props.error && (<p className="text-danger">{this.props.error.first_name}</p>)}


                <div className="form-group">
                    <input
                    onChange={this.props.onChange}
                    value={this.props.formValues.last_name}
                    name="last_name"
                    placeholder="Apellidos"
                    type="text"
                    />
                </div>
                {this.props.error && (<p className="text-danger">{this.props.error.last_name}</p>)}


                <button className="btn btn-primary">
                    Registrarte
                </button>
                {this.props.error && (<p className="text-danger">{this.props.error.message}</p>)}
                {this.props.error && (<p className="text-danger">{this.props.error.non_field_errors}</p>)}


            </form>
            </div>
        )
    }
}

export default SignupForm;