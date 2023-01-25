import { useEffect, useState, useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';


const SelectedCoffeeBean = props => {
  // const { coffeeBeans } = useSessionContext();
  // const [coffee, setCoffee] = useState([]);

  // const {coffeeBean} = props.coffeeBean;
  const {coffeeBean} = useContext(CoffeeContext)
  // debugger
  // console.log(useContext(CoffeeContext))
  // useEffect(() => {
  //   // setCoffee(coffeeBean)
  // }, [])

  return (
    <div>
        <div>
          <p>{coffeeBean.id}</p>
          <p>{coffeeBean.name}</p>
        </div>
    </div>
  )
}

export default SelectedCoffeeBean;