import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Dirección</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.nombre}</td>
            <td>{employee.dni}</td>
            <td>{employee.direccion}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;