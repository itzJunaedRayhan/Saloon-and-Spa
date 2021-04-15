import React from 'react';
import './AppointmentDesc.css'
const AppointmentDesc = ({appointment}) => {
    return (
        <div className="appointment-card">
            <div className="appointment-image">
            <img src={appointment.image} alt=""/>
            </div>
            <p><small>{appointment.name}</small></p>
        </div>
    );
};

export default AppointmentDesc;