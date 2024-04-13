import React, { useState, useEffect } from "react";
import logos from "../../assets/AddressFill.svg";
import Select from "react-select";

function AddressFill() {
 const [selectedCountry, setSelectedCountry] = useState(null);
 const [selectedState, setSelectedState] = useState(null);
 const [selectedDistrict, setSelectedDistrict] = useState(null);
 const [selectedCity, setSelectedCity] = useState(null);
 const [cityOptions, setCityOptions] = useState([]);
 const [StateList, setStateL5ist] = useState([]);
 const [dyanmicCountryISOCode, setdyanmicCountryISOCode] = useState("");

 useEffect(() => {
  addressApi();
 }, []);

 const addressApi = async () => {
  try {
   const response = await fetch(
    "https://api.countrystatecity.in/v1/countries",
    {
     headers: {
      "X-CSCAPI-KEY": "Z1AxUTBRNHpObnlMVW15aXZhb3FiN3B6YUJzVWtubzhJUXJpTGJ4Rw==" // Replace "API_KEY" with your actual API key
     }
    }
   );
   const fetchCountry = await response.json();
   // Extracting country options from API response
   const countryOptions = fetchCountry.map((country) => ({
    value: country.iso2,
    label: country.name
   }));
   setCityOptions(countryOptions);
  } catch (error) {
   console.error("Error fetching country options:", error);
  }
 };

 const handleCountryChange = (selectedOption) => {
  setSelectedCountry(selectedOption);
  setdyanmicCountryISOCode(selectedOption.value);
  setSelectedState(null);
  setSelectedDistrict(null);
  setSelectedCity(null);
  fetchStates();
 };
 const fetchStates = () => {
  var headers = new Headers();
  headers.append(
   "X-CSCAPI-KEY",
   "Z1AxUTBRNHpObnlMVW15aXZhb3FiN3B6YUJzVWtubzhJUXJpTGJ4Rw=="
  );

  var requestOptions = {
   method: "GET",
   headers: headers,
   redirect: "follow"
  };

  fetch(
   `https://api.countrystatecity.in/v1/countries/${dyanmicCountryISOCode}/states`,
   requestOptions
  )
   .then((response) => response.text())
   .then((result) => console.log(result))
   .catch((error) => console.log("error", error));
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
       options={cityOptions}
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
        options={StateList.map((state) => ({
         value: state.iso2,
         label: state.name
        }))}
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
        options={selectedState.districts.map((district) => ({
         value: district.name,
         label: district.name
        }))}
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
        options={selectedDistrict.cities.map((city) => ({
         value: city.name,
         label: city.name
        }))}
        value={selectedCity}
        onChange={handleCityChange}
        placeholder="Select Your City"
       />
      )}
     </div>
     <div
      className="btn-div"
      style={{ alignItems: "center", justifyContent: "center" }}
     >
      <div className="btn-div-1" style={{ marginRight: "50px" }}>
       <button type="submit" style={{ width: "300px" }}>
        Proceed
       </button>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default AddressFill;
