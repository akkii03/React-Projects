import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

const apiKey = "3ea36a2898e557e0a7c3c0137ae80cfb";
  const [cityName,setCity] = useState("");
  const[wheather,setWheather] = useState("Weather");
  const [error,setError] = useState(false);
  const[wheaDeatil,setwheaDeatil] = useState("Description");
  const [temp,setTemp] = useState("Temp");
  const [city,setCityData] = useState("City");
  const[windSpeed,setSpeed] = useState("Speed");
  

function handelInput (e) {
  setCity(e.target.value);
}

  const getWheatherDetails = (cityName)=> {
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey;
      axios.get(apiUrl).then((res)=>{
        setWheather(res.data.weather[0].main)
        setwheaDeatil(res.data.weather[0].description);
        setTemp(((res?.data?.main?.temp) - 273.15).toFixed(2));
        setCityData(res.data.name);
        setSpeed(res.data.wind.speed)
      }).catch((err)=>{
        setError(true); 
      });

      setError(false);
  }

  const handelSearch = ()=>{
    getWheatherDetails(cityName);
  }


  return (
    
        <div className='col-md-12'> 

          <div className='wheatherBg'>
            <h1 className='title'>Weather</h1>

            <div className='d-grid col-8 mt-4'>
            <input type="text" className='form-control' value={cityName} onChange={handelInput} placeholder="Enter City"/>
            </div>

            <div className='d-grid col-4 mt-4'>
            <button type='button' className='btn btn-success mt-2' onClick={handelSearch} > Search</button>
            </div>
          </div>

          <div className='col-md-12 text-center mt-2 main' >
           
               <div className='container'>
                
                <div className='row'>
                  
                <div className='col'>

                <div className='shadow-lg p-3 mb-5 bg-body  rounded weatherResultBox'> 
                <img className='icon' src='https://i.pinimg.com/736x/40/a4/47/40a447715b4aaa6f814f70af57139e58.jpg' alt='icon'/>
                <h5 className='city'>{error? "Invalid Data":city}</h5>
                <h6 className='temp'> {error?"Invalid":temp}°C</h6>
                </div>

                </div>

                <div className='col'>

                <div className='shadow-lg p-3 mb-5 bg-body  rounded weatherResultBox'> 
                <img className='icon' src='https://thumbs.dreamstime.com/b/sun-cloud-weather-summer-isolated-icon-white-background-sun-cloud-weather-summer-isolated-icon-white-background-vector-179306805.jpg' alt='icon'/>
                <h5 className='city'>{error? "Invalid Data":wheaDeatil}</h5>
                <h6 className='temp'> {error?"Invalid":wheather}</h6>
                </div>

                </div>


                <div className='col'>

                <div className='shadow-lg p-3 mb-5 bg-body  rounded weatherResultBox'> 
                <img className='icon' src='https://th.bing.com/th/id/R.1e86927dc684f0ca398386ef5ed75f02?rik=4IvJkaBOLerK5g&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwind-clipart-transparent%2fwind-clipart-transparent-19.png&ehk=6XLXb6WVeNsePxiqbgkpvYvGB5wfdejxaV8kxSrX%2bzs%3d&risl=&pid=ImgRaw&r=0' alt='icon'/>
                <h5 className='city'>{error? "Invalid Data":"Wind"}</h5>
                <h6 className='temp'> {error?"Invalid":windSpeed}</h6>
                </div>

                </div>


                </div>

               </div>

            

          </div> 


        </div>
  
  );
}

export default App;
