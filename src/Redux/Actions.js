import {FIND_CITY} from './Const'

export function findCity(name){
    return function(dispatch){
        var ciudad = {}
        const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`)
        .then(r => r.json())
        .then((recurso) => {
            if(recurso.main !== undefined){
                 ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon
            };
            var pais = recurso.sys.country; 

            fetch("https://country-info.p.rapidapi.com/code/" + pais, {
	            "method": "GET",
	            "headers": {
		        "x-rapidapi-host": "country-info.p.rapidapi.com",
		        "x-rapidapi-key": "d43d57e38amsh5e2acc6fc18657bp13c2fejsn4dd4184fc2a4"
	            }
            })
            .then(response => response.json())
            .then(response => ciudad.bandera = response.flag)
            .catch(err => {
	           alert(err);
            });

            dispatch({type: FIND_CITY, payload: ciudad})
        }   else {
        alert("Ciudad no encontrada");
        }
        })
    }
}