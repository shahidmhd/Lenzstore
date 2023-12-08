import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Dropdown from 'react-dropdown-select';

const DropdownModal = ({ show, onHide }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'men', label: 'Men' },
    { value: 'women', label: 'Women' },
    { value: 'unisex', label: 'Unisex' },
    { value: 'kids', label: 'Kids' },
  ];

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Dropdown Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown
          options={options}
          labelField="label"
          valueField="value"
          placeholder="Select an option"
          onChange={handleDropdownChange}
        />
        {selectedOption && <p>Selected Option: {selectedOption[0].label}</p>}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default DropdownModal;
