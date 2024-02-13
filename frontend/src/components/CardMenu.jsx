import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css' 
import logoicon from './imageicon.png'


const CardMenu = ({ patient, procedure, doctor, lead, qualified, booked, treated }) => {
  return (
    <div>
      <div className="mb-20">
        <div className="flex-start card-header">
          <div className="mr-10 ml-10">
            <img src={patient.avatar} width="30" height="30" alt="Logo Icon" />
          </div>
          <div>
            <p>{`${patient.first_name} ${patient.last_name}`}</p>
            <p>{patient.age} years old</p>
          </div>
        </div>

        <div className="flex-sb-card card-body">
          <div>
            <div className="ml-10">
              <p>{procedure}</p>
              <p>{doctor.first_name}</p>
              <div className="flex-sb-card">
                <div>
                  <p>Lead</p>
                  <p>Qualified</p>
                  <p>Booked</p>
                  <p>Treated</p>
                </div>
                <div className="ml-10">
                  <p>{lead}</p>
                  <p>{qualified}</p>
                  <p>{booked}</p>
                  <p>{treated}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mr-10">
            <img src={doctor.avatar} width="30" height="30" alt="Logo Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
