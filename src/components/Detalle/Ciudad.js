import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cityDetail } from "../../Redux/Actions";


export default function Ciudad() {
    let {id} = useParams(); 
    const [city, setCity] = React.useState({});
    const dispatch = useDispatch(); 
    const resultado = useSelector(state => state.city)

    React.useEffect(()=>{
      dispatch(cityDetail(id))
      setCity(resultado)
    })
    console.log(city.flag)
    return (
        <div className="ciudad">
            {city? <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                        <div>{city.flag}</div>
                    </div>
                 </div>: <span>Cargando</span>}
                
        </div>
    )
}