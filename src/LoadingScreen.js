import React from 'react'

export default function LoadingScreen(props) {
  return (
    <div className='col-md-12 text-center mt-2 main' >
           
    <div className='container'>
     
     <div className='row'>
       
     <div className='col'>

     <div className='shadow-lg p-3 mb-5 bg-body  rounded weatherResultBox'> 
     <img className='icon' src='https://i.pinimg.com/736x/40/a4/47/40a447715b4aaa6f814f70af57139e58.jpg' alt='icon'/>
     <h5 className='city'>{props.apiData.name}</h5>
     <h6 className='temp'> {props.apiData.temp}°C</h6>
     </div>

     </div>

     <div className='col'>

     <div className='shadow-lg p-3 mb-5 bg-body  rounded weatherResultBox'> 
     <img className='icon' src='https://thumbs.dreamstime.com/b/sun-cloud-weather-summer-isolated-icon-white-background-sun-cloud-weather-summer-isolated-icon-white-background-vector-179306805.jpg' alt='icon'/>
     <h5 className='city'>{props.apiData.description}</h5>
     <h6 className='temp'> {props.apiData.weather}</h6>
     </div>

     </div>


     <div className='col'>

     <div className='shadow-lg p-3 mb-5 bg-body  rounded weatherResultBox'> 
     <img className='icon' src='https://th.bing.com/th/id/R.1e86927dc684f0ca398386ef5ed75f02?rik=4IvJkaBOLerK5g&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwind-clipart-transparent%2fwind-clipart-transparent-19.png&ehk=6XLXb6WVeNsePxiqbgkpvYvGB5wfdejxaV8kxSrX%2bzs%3d&risl=&pid=ImgRaw&r=0' alt='icon'/>
     <h5 className='city'>Wind</h5>
     <h6 className='temp'> {props.apiData.wind}</h6>
     </div>

     </div>


     </div>

    </div>
</div>
  )
}
