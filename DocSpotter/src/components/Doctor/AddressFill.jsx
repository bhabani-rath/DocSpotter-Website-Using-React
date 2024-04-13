import React, { useState } from "react";
import logos from "../../assets/AddressFill.svg";
import Select from "react-select";

function AddressFill() {
 const [selectedCountry, setSelectedCountry] = useState(null);
 const [selectedState, setSelectedState] = useState(null);
 const [selectedDistrict, setSelectedDistrict] = useState(null);
 const [selectedCity, setSelectedCity] = useState(null);

 const countryOptions = [
  { value: "USA", label: "United States" },
  { value: "UK", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "India", label: "India" }
 ];

 const stateOptions = {
  USA: [
   { value: "California", label: "California" },
   { value: "New York", label: "New York" }
  ]
  // Add options for other countries here
 };

 const districtOptions = {
  California: [
   { value: "San Francisco", label: "San Francisco" },
   { value: "Los Angeles", label: "Los Angeles" },
   { value: "San Diego", label: "San Diego" },
   { value: "San Jose", label: "San Jose" },
   { value: "Fresno", label: "Fresno" },
   { value: "Sacramento", label: "Sacramento" },
   { value: "Oakland", label: "Oakland" },
   { value: "Long Beach", label: "Long Beach" },
   { value: "Bakersfield", label: "Bakersfield" },
   { value: "Santa Ana", label: "Santa Ana" }
   // Add more districts for California
  ],
  "New York": [
   { value: "Manhattan", label: "Manhattan" },
   { value: "Brooklyn", label: "Brooklyn" },
   { value: "Queens", label: "Queens" },
   { value: "Bronx", label: "Bronx" },
   { value: "Staten Island", label: "Staten Island" },
   { value: "Buffalo", label: "Buffalo" },
   { value: "Rochester", label: "Rochester" },
   { value: "Yonkers", label: "Yonkers" },
   { value: "Syracuse", label: "Syracuse" },
   { value: "Albany", label: "Albany" }
   // Add more districts for New York
  ],
  Texas: [
   { value: "Houston", label: "Houston" },
   { value: "San Antonio", label: "San Antonio" },
   { value: "Dallas", label: "Dallas" },
   { value: "Austin", label: "Austin" },
   { value: "Fort Worth", label: "Fort Worth" }
   // Add more districts for Texas
  ],
  Florida: [
   { value: "Miami", label: "Miami" },
   { value: "Orlando", label: "Orlando" },
   { value: "Tampa", label: "Tampa" },
   { value: "Jacksonville", label: "Jacksonville" },
   { value: "Fort Lauderdale", label: "Fort Lauderdale" }
   // Add more districts for Florida
  ]
  // Add more states with district options here
 };

 const cityOptions = {
  // Define city options here
 };

 const handleCountryChange = (selectedOption) => {
  setSelectedCountry(selectedOption);
  setSelectedState(null);
  setSelectedDistrict(null);
  setSelectedCity(null);
 };

 const handleStateChange = (selectedOption) => {
  setSelectedState(selectedOption);
  setSelectedDistrict(null);
  setSelectedCity(null);
 };

 const handleDistrictChange = (selectedOption) => {
  setSelectedDistrict(selectedOption);
  setSelectedCity(null);
 };

 const handleCityChange = (selectedOption) => {
  setSelectedCity(selectedOption);
 };

 return (
  <>
   <div className="main-div">
    <div className="svg-div">
     <img
      src={logos}
      alt="Error 404"
      style={{ width: "40rem", height: "50rem", marginTop: "50px" }}
     />
    </div>
    <div className="form-part-div">
     <h1 className="p1">Select Your Location</h1>
     <h2 className="p1" style={{ fontWeight: "300", fontSize: "1.6rem" }}>
      Illuminate the path to wellness with Doc Spotter's guiding light
     </h2>
     <div className="select-f1">
      <Select
       isClearable
       isSearchable
       className="select-country"
       classNamePrefix="select"
       options={countryOptions}
       value={selectedCountry}
       onChange={handleCountryChange}
       placeholder="Select Your Country"
      />
      {selectedCountry && (
       <Select
        isClearable
        isSearchable
        className="select-state"
        classNamePrefix="select"
        options={stateOptions[selectedCountry.value]}
        value={selectedState}
        onChange={handleStateChange}
        placeholder="Select Your State"
       />
      )}
     </div>
     <div className="select-f2">
      {selectedState && (
       <Select
        isClearable
        isSearchable
        className="select-district"
        classNamePrefix="select"
        options={districtOptions[selectedState.value]}
        value={selectedDistrict}
        onChange={handleDistrictChange}
        placeholder="Select Your District"
       />
      )}
      {selectedDistrict && (
       <Select
        isClearable
        isSearchable
        className="select-city"
        classNamePrefix="select"
        options={cityOptions[selectedDistrict.value]}
        value={selectedCity}
        onChange={handleCityChange}
        placeholder="Select Your City"
       />
      )}
     </div>
     <div
      className="btn-div"
      style={{alignItems: "center", justifyContent: "center" }}
     >
      <div className="btn-div-1" style={{marginRight:"50px"}}>
       <button type="submit" style={{width:"300px"}}>Proceed</button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default AddressFill;
