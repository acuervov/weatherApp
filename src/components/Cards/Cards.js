import React from 'react';
import './Cards.css';

import Card from '../Card/Card';

export default function Cards({cities}) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
          id={c.id}
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          flag = {c.bandera}
        /> )}
    </div>
  );
}
