import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import rightarrow from './images/icon-arrow.svg';
import IPDetailsMenu from './components/IPDetailsMenu';

function App() {
  const [loading, setLoading] = useState(true);

  const [IPDetails, setIPDetails] = useState({
    ipAddress: '' ,isp: '', location: {
      country: '',
      city: '',
      geonameId: 0,
      lat: 0,
      lng: 0,
      postalCode: '',
      region: '',
      timezone: ''
  }});

  const IPAddressDomain = 'https://geo.ipify.org/api/v1';
  const APIKEY = "at_CAnm1q9XevgH7syohZnZPNpC0Hyi3";

  useEffect(() => {
    async function fetchData(){
      let ipifyresponse = await axios.get(`${IPAddressDomain}?apiKey=${APIKEY}&ipAddress=`);
      setLoading(false);

      let toSetStateValue = {
        ipAddress: ipifyresponse.data.ip,
        isp: ipifyresponse.data.isp,
        location: {
          country: ipifyresponse.data.location.country,
          city: ipifyresponse.data.location.city,
          geonameId: ipifyresponse.data.location.geonameId,
          lat: ipifyresponse.data.location.lat,
          lng: ipifyresponse.data.location.lng,
          postalCode: ipifyresponse.data.location.postalCode,
          region: ipifyresponse.data.location.region,
          timezone: ipifyresponse.data.location.timezone
        }
      };

      setIPDetails(toSetStateValue);
      console.log(toSetStateValue);
    }

    fetchData();
  },[]);

  return (
    <div className="App">
      {loading ? <Loader/> : <MainApp IPDetails = {IPDetails}/>}
    </div>
  );
}

function MainApp({IPDetails}){
  return(
    <React.Fragment>
    <header>
      <div className = 'ipInput'>
        <h1>IP Address Tracker</h1>
        <InputForm/>
      </div>
    </header>
    <IPDetailsMenu ipAddress = {IPDetails.ipAddress} isp = {IPDetails.isp} timezone = {IPDetails.location.timezone} location = {IPDetails.location}/>
    </React.Fragment>
  )
}

function InputForm({submitHandler}){
  const [ipAddress, setIpAddress] = useState('');
  return(
    <form onSubmit = {submitHandler}>
      <input type = 'text' name = 'ip address' placeholder = 'Search for any IP address or domain' value = {ipAddress} onChange = {(e) => setIpAddress(e.currentTarget.value)}/>
      <button type = 'submit'><img alt = 'next' src = {rightarrow}/></button>
    </form>
  )
}

function Loader(){
  return (
    <div className = 'loader'>
    <div className="loader__circles__container">
      <div className="loader__circle"></div>
      <div className="loader__circle"></div>
      <div className="loader__circle"></div>
      <div className="loader__circle"></div>
    </div>
    <p className = 'loader__p'>Loading...</p>
  </div>
  )
}
export default App;
