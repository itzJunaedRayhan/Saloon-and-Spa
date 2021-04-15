import React from 'react';
import './Appointments.css'
import boy from '../../../images/boy.png'
import girl from '../../../images/girl.png'
import Massage from '../../../images/Message.png'
import AppointmentDesc from '../AppointmentsDesc/AppointmentDesc';
const AppointmentsInfo = [
    {
        image : Massage,
        name  : 'Massage'
    },
    {
        image : Massage,
        name  : 'Pedicure'
    },
    {
        image : Massage,
        name  : 'Facial'
    },
    {
        image : Massage,
        name  : 'Barber'
    },
    {
        image : Massage,
        name  : 'Manicure'
    },
    {
        image : Massage,
        name  : 'Foot Massage'
    },
    {
        image : Massage,
        name  : 'Massage'
    },
    {
        image : Massage,
        name  : 'Pedicure'
    },
    {
        image : Massage,
        name  : 'Facial'
    },
    {
        image : Massage,
        name  : 'Barber'
    },
    {
        image : Massage,
        name  : 'Manicure'
    },
    {
        image : Massage,
        name  : 'Foot Massage'
    }
]
const Appointments = () => {
    return (
        <>
            <div className="boy-or-girl">
                <div className="header-boy">
                    <img src={boy} alt="" className="img-responsive"/>
                    <h6>Boy</h6>
                </div>
                <div className="header-girl">
                    <img src={girl} alt="" className="img-responsive"/>
                    <h6>Girl</h6>
                </div>
            </div>
            <div className="appointment-section">
                <div className="appointment-card wrapper" style={{margin: '20px auto', marginBottom: '80px'}}>
                    <h4>Appointment</h4>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit</small></p>
                    <div className="appointment-wrapper">
                        {
                            AppointmentsInfo.map(appointment => <AppointmentDesc appointment={appointment}></AppointmentDesc>)
                        }
                    </div>
                </div>
                <div className="appointment-card wrapper" style={{margin: '20px auto'}}>
                    <h4>Home Services</h4>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit</small></p>
                    <div className="appointment-wrapper">
                        {
                            AppointmentsInfo.map(appointment => <AppointmentDesc appointment={appointment}></AppointmentDesc>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Appointments;