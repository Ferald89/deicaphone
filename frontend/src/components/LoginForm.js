import React from 'react';

class LoginForm extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <input
                        onChange={this.props.onChange}
                        value={this.props.formValues.email}
                        className="form-control"
                        name="email"
                        placeholder="email"
                        type="email"
                        />
                    </div>
                    {this.props.error && (<p className="text-danger">{this.props.error.email}</p>)}


                    <div className="form-group">
                        <input
                        onChange={this.props.onChange}
                        value={this.props.formValues.password}
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        type="password"
                        />
                    </div>
                    {this.props.error && (<p className="text-danger">{this.props.error.password}</p>)}


                    <button className="btn btn-primary">
                        Iniciar sesión
                    </button>
                        {this.props.error && (<p className="text-danger">{this.props.error.message}</p>)}
                        {this.props.error && (<p className="text-danger">{this.props.error.non_field_errors}</p>)}
                </form>
            </div>
        );
    }
}

export default LoginForm;
