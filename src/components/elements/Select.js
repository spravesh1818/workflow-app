import React from "react";

const Select = ({field_id, field_label, field_placeholder, field_value,field_options }) => {
  return (
    <div className="mb-3 form-check">
        <label>{field_label}</label>
      <select className="form-select" aria-label="Default select example">
        <option defaultValue>Open this select menu</option>
        {field_options.length>0 && field_options.map((option,i)=>
            <option value={option.option_label} key={i}>{option.option_label}</option>
        )}
      </select>
    </div>
  );
};

export default Select;
