import React from "react";
import Card from "../../Ui/Card";
import './Fetchdata.css'
import { Link } from "react-router-dom";
const Fetchdata = (props) => {
  // const [countrydata, setcountrydata] = useState([])

  // useEffect(() => {
  //     const fetchdata = async() => {
  //             await fetch("http://localhost:3000/" )
  //             .then(response => {
  //                 if(!response.ok){
  //                     throw new Error('Error With the Network')
  //                 }
  //             })
  //             .then(data => setcountrydata(data) )
  //     }
  // })
  // console.log(countrydata)

  return <div className="datafetched"> 
  <Link to={`/country/${props.id}`}>
 <Card>
    <div className="imgpart">
    <img className="imgprops" src={props.image} alt="imag" />
    </div>

    <h1 className="title">{props.name}</h1>
    <div className="paras">
    <p className="abouttext">population: {props.population}</p>
    <p className="abouttext">region: {props.region}</p>
    <p className="abouttext">capital: {props.capital}</p>

    </div>
 
  </Card>
  </Link>
  </div>
 ;
};

export default Fetchdata;
