import './App.css';
import {useState} from 'react';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import Spinner from './Spinner';

function App() {

const apiKey = "3ea36a2898e557e0a7c3c0137ae80cfb";
const [apiData,setData] = useState(false);
const [cityName,setCity] = useState("");
const [loading,setLoading] = useState(false);

  

  

function handelInput (e) {
  setCity(e.target.value);
  if(e.target.value ==='') {
    setData(false);
  }
  
}

  const getWheatherDetails = async (cityName)=> {
      setLoading(true);   
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey;
      await axios.get(apiUrl).then((res)=>{
        setData(
          {
            weather:res.data.weather[0].main,
            description:res.data.weather[0].description,
            temp:((res?.data?.main?.temp) - 273.15).toFixed(2),
            name:res.data.name,
            wind:res.data.wind.speed,
          }
        )
          setLoading(false);
      }).catch((err)=>{
       console.log("api calling is fail due to",err);
      });
      
  }

  const handelSearch = ()=>{
    getWheatherDetails(cityName);
  }


  return (
    
        <div className='col-md-12'> 

          <div className='wheatherBg'>
            <h1 className='title'>Weather (Forecasts)</h1>

            <div className='d-grid col-8 mt-4'>
            <input type="text" className='form-control' value={cityName} onChange={handelInput} placeholder="Enter City"/>
            </div>

            <div className='d-grid col-4 mt-4'>
            <button type='button' className='btn btn-success mt-2' onClick={handelSearch} > Search</button>
            </div>
          </div>
          {loading && <Spinner loading={loading} />}
         { apiData &&  !loading &&  <LoadingScreen  apiData={apiData}/> }
        

        </div>
  
  );
}

export default App;
