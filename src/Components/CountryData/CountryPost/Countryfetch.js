import React from "react";
import "./Country.css";
import countrydata from "../../../data";
import Fetchdata from "../FetchData/Fetchdata";
const Countryfetch = ({ searchinput }) => {
  // useEffect(() => {
  //   const data = async () => {
  //     await fetch("http://localhost:3000/", {
  //       method: "post",
  //       body: JSON.stringify(countrydata),
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     });
  //   };
  //   data();
  // });
console.log(searchinput)
  const fetchcountry = countrydata
    .filter((datas) => datas.name.toLowerCase().includes(searchinput)).map((country) => (
      <ul>
        <Fetchdata
        id={country.numericCode}
          image={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      </ul>
    ));
  return (
    <div className="alldata">
      <li>{fetchcountry}</li>
    </div>
  );
};

export default Countryfetch;
