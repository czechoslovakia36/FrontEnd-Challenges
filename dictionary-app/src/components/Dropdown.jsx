import React from 'react';

import '../assets/css/dropdown.css'

// MUI DropDown Dependencies 



const Dropdown = () => {
  return (
    <div className="custom-select">
      <select>
        <option>Serif</option>
        <option>New Roman</option>
        <option>Crimson</option>
      </select>
    </div>
  );
}

export default Dropdown;
