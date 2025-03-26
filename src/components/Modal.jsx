import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import EmployeeEntry from './EmployeeEntry';

const Modal = ({ show, onClose, onSubmit }) => {
  return (
    <BootstrapModal show={show} onHide={onClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Agregar Empleado</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <EmployeeEntry onSubmit={onSubmit} />
      </BootstrapModal.Body>
    </BootstrapModal>
  );
};

export default Modal;