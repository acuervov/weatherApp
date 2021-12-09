import React from "react";
import Cards from '../Cards/Cards'
import {useSelector} from "react-redux";

export default function Home (){

const [cities, setCities] = React.useState([])
const resultado = useSelector(state => state.cities)

React.useEffect(()=>{
    setCities(resultado)
})

    return (
        <div className="home">
        {cities.length !== 0? <Cards cities={cities}/>: <span>No hay ciudades por el momento</span>}
        </div>
    )
}