import Input from "./input/input";
import Header from './header/Header';
import CoinList from "./CoinList";
import { BrowserRouter } from "react-router-dom";
import { Switch} from "react-router-dom";
import { Route } from "react-router-dom";


function App() {
  return (
    <>
   
      <BrowserRouter>
      <Header />
      
      <Switch>
        <Route exact path="/">
          <Input />
        </Route>
        <Route path="/CoinList">
          <CoinList />
        </Route>
      </Switch>
    </BrowserRouter> 
  

    </>
  );
}

export default App;


