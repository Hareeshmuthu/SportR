import React, { useState } from "react";


const Cities = () => {
  const cityData = {
    Coimbatore: {
      Gandhipuram: ["Brookefields Mall", "VOC Park", "Gandhipuram Bus Stand"],
      "RS Puram": ["Brookefields Mall", "VOC Park", "Gandhipuram Bus Stand"],
      Peelamedu: ["Codissia Trade Fair Complex", "Tidel Park", "PSG College"],
    },
    Chennai: {
      "T. Nagar": ["Pondy Bazaar", "Panagal Park", "Natesan Park"],
      Adyar: ["Besant Nagar Beach", "Theosophical Society", "Adyar Eco Park"],
      Mylapore: ["Kapaleeshwarar Temple", "San Thome Basilica", "Luz Church"],
    },
    Madurai: {
      "Anna Nagar": [
        "Gandhi Memorial Museum",
        "Vishal de Mal",
        "Anna Nagar Tower Park",
      ],
      Thirunagar: [
        "Rajaji Park",
        "Thirunagar Shopping Complex",
        "Thirunagar Bus Stand",
      ],
      "K.K. Nagar": ["K.K. Nagar Arch", "Meenakshi Park", "Vandiyur Lake"],
    },
  };


  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [areas, setAreas] = useState([]);
  const [places, setPlaces] = useState([]);


  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setSelectedArea("");
    setPlaces([]);
    if (city === "Coimbatore" || city === "Chennai" || city === "Madurai") {
      setAreas(Object.keys(cityData[city]));
    } else {
      setAreas([]);
      setPlaces(cityData[city] || []);
    }
  };


  const handleAreaChange = (event) => {
    const area = event.target.value;
    setSelectedArea(area);
    setPlaces(cityData[selectedCity][area] || []);
  };
  return (
    <div>
      {/* <h5>City</h5> */}
      <select onChange={handleCityChange} defaultValue="" class="btn btn-dark dropdown-toggle city">
    
        <option value="" disabled>
          Select Your city
        </option>
        {Object.keys(cityData).map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>


      {/* {(selectedCity === "Coimbatore" ||
        selectedCity === "Chennai" ||
        selectedCity === "Madurai") && (
        <div>
          <h5>Area {selectedCity}:</h5>
          <select
            onChange={handleAreaChange}
            value={selectedArea}
            defaultValue=""
          >
            <option value="" disabled>
              Select an area
            </option>
            {areas.map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      )} */}


      {places.length > 0 && (
        <div>
          <h2>Places in {selectedArea || selectedCity}:</h2>
          <ul>
            {places.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default Cities;


