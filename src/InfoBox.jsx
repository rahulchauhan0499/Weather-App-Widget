import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FlareIcon from '@mui/icons-material/Flare';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./InfoBox.css"


function InfoBox({info}){
    let INIT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyL_MJcHuHXBRcS7T3MZaZawGZHRyVEYzsvw&usqp=CAU"
    const HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo="

    return(
        <div className='InfoBox'>
              <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_URL:(info.temp)>15 ? HOT_URL:COLD_URL}
                    title="green iguana"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {info.city.toUpperCase()}
                      {info.humidity>80 ? <ThunderstormIcon/>:(info.temp)>15 ? <FlareIcon/> :<AcUnitIcon/> }
                      
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"} >
                      <p>Temprature:{info.temp}&deg;c</p>
                      <p>Humidity:{info.humidity}</p>
                      <p>Min Temperature:{info.tempMin}&deg;c</p>
                      <p>Max Temperature:{info.tempMax}&deg;c</p>
                      <p>The weather can be described as <b>{info.weather}</b>  and feel likes:{info.feelsLike}&deg;c</p>
                      <p></p>
                      </Typography>
                  </CardContent>
                </Card>
              </div>
        </div>


    )
}

export default InfoBox;