import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import rightarrow from './images/icon-arrow.svg';
import IPDetailsMenu from './components/IPDetailsMenu';

function App() {
  const [loading, setLoading] = useState(true);
  const [IPDetails, setIPDetails] = useState({});
  const IPAddressDomain = 'https://geo.ipify.org/api/v1';
  const APIKEY = "at_CAnm1q9XevgH7syohZnZPNpC0Hyi3";

  useEffect(() => {
    async function fetchData(){
      let ipifyresponse = await axios.get(`${IPAddressDomain}?apiKey=${APIKEY}&ipAddress=`);
      setLoading(false);
      setIPDetails(JSON.stringify(ipifyresponse, null, 0));
    }
    fetchData();
  },[]);

  return (
    <div className="App">
      {loading ? <Loader/> : <MainApp IPDetails = {IPDetails}/>}
      <MainApp/>
    </div>
  );
}

function MainApp(props){
  return(
    <React.Fragment>
    <header>
      <div className = 'ipInput'>
        <h1>IP Address Tracker</h1>
        <InputForm/>
      </div>
    </header>
    <IPDetailsMenu/>
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
