import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, countryHandler, flagsHandler }) => {
  const [click, setClick] = useState(false);
  console.log(country.flags.flags.png);
  const eventHandler = () => {
    setClick(!click);
    countryHandler(country);
  };
  return (
    <div>
      <div className={`initialize ${click && "after-clicked"}`}>
        <img class="mx-auto" src={country.flags.flags.png} alt="" />
        <h3>I am Country : {country.name.common}</h3>
        <div class="flex justify-evenly">
          <button className="bg" onClick={eventHandler}>
            {click === true ? "visited" : "Not visited"}
          </button>
          <button
            className="bg"
            onClick={() => {
              flagsHandler(country.flags.flags.png);
            }}
          >
            Flag
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
