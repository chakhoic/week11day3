import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import coffeeBeans from "./mockData/coffeeBeans.json";
import { Route } from "react-router-dom";
import { createContext, useContext } from "react";
import SetCoffeeBean from "./components/SetCoffeeBean";
import { CoffeeContext } from "./context/CoffeeContext";

export const SessionContext = createContext();

function App() {
  return (
    <>
      <h1>Welcome to Coffee App</h1>
        <SetCoffeeBean coffeeBeans={coffeeBeans} />
        {/* <CoffeeContext /> */}
        <SelectedCoffeeBean />
    </>
  );
}

export const useSessionContext = () => {
  return useContext(SessionContext);
};

export default App;