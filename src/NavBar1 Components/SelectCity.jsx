import React from "react";
import Select from "react-select";

function SelectCity() {
  const cityOptions = [
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Chennai", label: "Chennai" },
    { value: "Madurai", label: "Madurai" },
  ];

  return (
    <div className="row" style={{ width: "270px", marginTop: "12px" }}>
      <Select options={cityOptions} placeholder="Select a city" isClearable />
    </div>
  );
}

export default SelectCity;
