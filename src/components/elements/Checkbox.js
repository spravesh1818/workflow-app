import React from "react";

const Checkbox = ({field_id, field_label, field_placeholder, field_value}) => {
  return (
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id={field_id} />
      <label className="form-check-label" htmlFor={field_id}>
        {field_label}
      </label>
    </div>
  );
};

export default Checkbox;
