// LandingPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cities = () => {
  const cityData = ["Coimbatore", "Chennai", "Madurai"];
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    navigate(`/city/${city}`);
  };

  return (
    <div>
      {/* <h1>Select a City</h1> */}
      <select onChange={handleCityChange} value={selectedCity} defaultValue="">
        <option value="" disabled>
          Select a city
        </option>
        {cityData.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Cities;
