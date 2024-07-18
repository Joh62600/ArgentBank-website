import React from "react";

import "./Field.css";

export default function Field({ label, type, content, value, onChange, placeholder, autocomplete }) {
  return (
    <div className="field-content">
      <label htmlFor={content}>{label}</label>
      <input
        type={type}
        id={content}
        name={content}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autocomplete} 
      />
    </div>
  );
}
