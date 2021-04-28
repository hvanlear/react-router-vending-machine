import Chips from "./components/Chip";
import VendingMachine from "./components/VendingMachine";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <VendingMachine />
      </Route>
      <Route path="/chips" exact>
        <Chips />
      </Route>
    </BrowserRouter>
  );
}

export default App;
