// src/components/Input.js
import React, { useState } from 'react';
import '../styles/input.css'




const Input = ({ label,name,type,value, onChange, id,my }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input

        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="input-field"
        name = {name}
        
      />
    </div>
  );
};

export default Input;
