import React, { useState} from "react";
import { useDispatch } from 'react-redux'
import { findCity } from "../../Redux/Actions";


export default function SearchBar() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch()


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(findCity(city));
      setCity("")
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
