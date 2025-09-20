import React, { use, useState } from "react";
import Country from "../Country.jsx/Country";

const Countries = ({ fetchApi }) => {
  const newApi = use(fetchApi);
  console.log(newApi);
  const allCountry = newApi.countries;
  console.log(allCountry);

  const [countryValue, setCountryValue] = useState([]);
  const [countryFlags, setCountryFlags] = useState([]);

  const countryHandler = (country) => {
    const updateVal = [...countryValue, country];
    setCountryValue(updateVal);
  };
  const flagsHandler = (flag) => {
    const updateValue = [...countryFlags, flag];
    setCountryFlags(updateValue);
  };

  return (
    <div>
      <h1 class="font-bold mb-5 text-blue-600 text-center underline">
        |- Total Country -|
      </h1>
      <h4 class="font-bold mb-1.5 ">visited country :</h4>
      <div class="ml-7">
        <ol>
          {countryValue.map((singleCountry) => (
            <li
              class="font-semibold text-blue-700 list-decimal"
              key={singleCountry.cca3.cca3}
            >
              {singleCountry.name.common}
            </li>
          ))}
        </ol>
      </div>
      <div class="flex gap-2.5 mb-3.5">
        {countryFlags.map((flag, index) => (
          <img class="h-16 w-24" key={index} src={flag} alt=""></img>
        ))}
      </div>

      <div class="grid grid-cols-3 gap-3">
        {allCountry.map((country) => (
          <Country
            country={country}
            countryHandler={countryHandler}
            flagsHandler={flagsHandler}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
