import React from "react";
import "./singleid.css";
import { Link } from "react-router-dom";
import countrydata from "../../data";
import { useParams } from "react-router-dom";
const Single = () => {
  const { id } = useParams();


  const filterdata = countrydata.filter((Data) => Data.numericCode === id)
console.log(filterdata)

  return (
    <div className="holdpreview">
        
      <div className="section">
        <div className="previewdata">
            <Link to='/'>
            <button className="backbtn">Back</button>

            </Link>
          {filterdata.map((predata) => 
           <div className="preview">
           <div className="imagecontain">
             <img className='previewimage' src={predata.flag} alt="img" />
           </div>
           <div className="previewdisc">
             <h2>{predata.name}</h2>
             <div className="aboutcountry">
               <div>
                 <p className="description">
                   Native name:<span> {predata.nativeName}</span>
                 </p>
                 <p className="description">
                   Population:<span> {predata.population}</span>
                 </p>
                 <p className="description">
                   Region:<span> {predata.region}</span>
                 </p>
                 <p className="description">
                   Sub Region:<span> {predata.subregion}</span>
                 </p>
                 <p className="description">
                   Capital:<span> {predata.capital}</span>
                 </p>
               </div>
               <div>
                 <p className="description">
                   Top Level Domain:<span> {predata.topLevelDomain}</span>
                 </p>
                 <p className="description">
                   Currencies:<span>  </span>
                 </p>
                 <p className="description">
                   Language:<span> </span>
                 </p>
               </div>
             </div>
             <h4>Border Countries: <ul className="bord"><li className="border">{predata.borders.toString()}</li></ul> </h4>
           </div>
         </div>
          
          )}
         
        </div>
      </div>
    </div>
  );
};

export default Single;
