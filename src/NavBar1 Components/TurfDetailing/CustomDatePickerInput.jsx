import React from "react";

// Custom input component for DatePicker
const CustomDatePickerInput = ({ value, onClick }) => (
  <div className=" col-12 custom-datepicker-input " onClick={onClick}>
    <input type="text" value={value} readOnly className="form-control" />
    <span className="indicator-container"></span>
  </div>
);

export default CustomDatePickerInput;
