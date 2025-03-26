import React, { useState } from 'react';

const EmployeeEntry = ({ onSubmit }) => {
  const [employeeData, setEmployeeData] = useState({
    nombre: '',
    dni: '',
    direccion: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employeeData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={employeeData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">DNI</label>
        <input
          type="text"
          className="form-control"
          name="dni"
          value={employeeData.dni}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Dirección</label>
        <input
          type="text"
          className="form-control"
          name="direccion"
          value={employeeData.direccion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={employeeData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success">Agregar</button>
    </form>
  );
};

export default EmployeeEntry;