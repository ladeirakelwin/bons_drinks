import React, { useState } from 'react';
import { drinks } from '../../Service';
import {title} from "./Drinks.module.css";

const Drinks = () => {
  const [drink, setDrink] = useState('')
  drinks().then(data => setDrink(data.drinks) );
  return (
    <section>
      {`${drink.forEach((item) => console.log(item))}`}
      <div className={title}>
        <h1>Drinks</h1>
      </div>
      <div>
        <div>
        </div>
      </div>
    </section>
  )
}

export default Drinks
