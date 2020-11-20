import React from 'react';

import './styles/Badge.css';
import noimagen from '../images/noimagen.jpg'

// import Gravatar from './Gravatar';

class Machine extends React.Component{
    render(){
        let {model, about, next_service, serial_number, email, name_user, picture} = this.props;

        return <div className="Badge">


            <div className="Badge__section-name">
                {picture &&
                <img src={picture} alt="image" className="machineimage"/>
                }
                {!picture &&
                <img src={noimagen} alt="image" className="machineimage"/>
                }
            </div>

            <div className="Badge__section-info">
                <h3>Dueño: {name_user}</h3>
                {/* <div>{next_service}</div> */}
                {/* <div>{serial_number}</div> */}
                {/* <div>{email}</div> */}
            <div>Descripción: {about}</div>
            </div>

        </div>;
    }
}

export default Machine;