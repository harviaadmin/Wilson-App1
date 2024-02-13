import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { Button, Form } from 'react-bootstrap';

const AddOpportunity = ({ isOpen, onClose, handleSaveData }) => {
  const [procedureName, setProcedureName] = useState('');
  const [lead, setLead] = useState('');
  const [qualified, setQualified] = useState('');
  const [booked, setBooked] = useState('');
  const [treated, setTreated] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState('');
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    axios.get('http://localhost:3001/members.json')
        .then(response => {
          setDoctors(response.data.doctors)
          setPatients(response.data.patients)
        })
        .catch(error => {
          console.error('Error fetching opportunities:', error);
        });
  }, []);

  const handleSubmit = () => {
    const formData = {
      procedure_name: procedureName,
      doctor_id: doctor,
      patient_id: patient,
      stage_history: {
        lead: lead,
        qualified: qualified,
        booked: booked,
        treated: treated
      }
    }

    axios.post('http://localhost:3001/opportunities.json', {opportunity: formData})
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error('Error fetching opportunities:', error);
    });
    handleCloseModal();
  };

  return (
    <>
    <button className="addmember ml-40" onClick={handleOpenModal}>Add opportunity</button>
    <Modal open={showModal} onClose={handleCloseModal} center>
      <h2>Add Opportunity</h2>
      <form>
        <div>
          <label>Procedure Name:</label>
          <input
            type="text"
            value={procedureName}
            onChange={(e) => setProcedureName(e.target.value)}
          />
        </div>
        <div>
          <label>Doctor:</label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          >
          {doctors.map((member) => (
            <option key={member.id} value={member.id}>
              {`${member.first_name} ${member.last_name}`}
            </option>
          ))}
          </select>
        </div>
        <div>
          <label>Patient:</label>
          <select
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          >
          {patients.map((member) => (
            <option key={member.id} value={member.id}>
              {`${member.first_name} ${member.last_name}`}
            </option>
          ))}
          </select>
        </div>
        <div>
          <label>Lead:</label>
          <input
            type="datetime-local"
            value={lead}
            onChange={(e) => setLead(e.target.value)}
          />
        </div>
        <div>
          <label>Qualified:</label>
          <input
            type="datetime-local"
            value={qualified}
            onChange={(e) => setQualified(e.target.value)}
          />
        </div>
        <div>
          <label>Booked:</label>
          <input
            type="datetime-local"
            value={booked}
            onChange={(e) => setBooked(e.target.value)}
          />
        </div>
        <div>
          <label>Treated:</label>
          <input
            type="datetime-local"
            value={treated}
            onChange={(e) => setTreated(e.target.value)}
          />
        </div>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </form>
    </Modal>
    </>
  );
};

export default AddOpportunity;
