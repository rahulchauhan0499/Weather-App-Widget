import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { colors } from '@mui/material';
function SearchBox({updateInfo}){
    let [city,setCity]=useState("")
    let [error,setError]=useState(false)
    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let API_KEY="f07dabcaeace60b6e1e5bf5ac50fbf56"

    let getWeatherInfo=async()=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse=await response.json()
        console.log(jsonResponse)
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_max,
            tempMax:jsonResponse.main.temp_min,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        }
        console.log(result)
        return(result)

        }catch(err){
        throw err
        }
        
    
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=async (evt)=>{
        try{evt.preventDefault();
            console.log(city)
            setCity("")
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo)
        }catch(err){
            setError(true)
        }
        
    }
    return(
        <div className='SearchBox'>
            <form>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br/><br/>
            <Button variant="contained" type='submit' onClick={handleSubmit}>submit</Button>
            {error&&<p style={{color:"red"}}>No such place exist.</p>}

            </form>
        </div>

    )
}

export default SearchBox;