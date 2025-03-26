import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EmployeeList from './components/EmployeeList';
import Modal from './components/Modal';

const API_URL = 'https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleAddEmployee = async (employeeData) => {
    try {
      await axios.post(API_URL, employeeData);
      fetchEmployees();
      setShowModal(false);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Listado de Empleados</h1>
      <button className="btn btn-primary mb-4" onClick={() => setShowModal(true)}>
        Agregar Empleado
      </button>
      <EmployeeList employees={employees} />
      <Modal show={showModal} onClose={() => setShowModal(false)} onSubmit={handleAddEmployee} />
    </div>
  );
}