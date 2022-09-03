import './App.css';
import Login from './pages/Login';
import CheckBalance from './pages/CheckBalance';
import CreateAccount from './pages/CreateAccount';
import DepositMoney from './pages/DepositMoney';
import HomePage from './pages/HomePage';
import PinChange from './pages/PinChange';
import WithdrawMoney from './pages/WithdrawMoney';
import PageNotFound from './pages/PageNotFound'
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";


function App() {
  // console.log(axios.get("http://127.0.0.1:8000/api/accounts").then((res)=>{
  //   console.log(res.data)
  // }))
  // console.log("Parag")
  return (
    <Router>
      <Switch>
     
      <Route path="/login">
            <Login  />
      </Route>

      <Route path="/createaccount">
            <CreateAccount  />
      </Route>

      <Route path="/withdrawmoney">
            <CreateAccount  />
      </Route>

      <Route path="/depositmoney">
            <CreateAccount  />
      </Route>

      <Route path="/checkbalance">
            <CreateAccount  />
      </Route>

      <Route path="/pinchange">
            <CreateAccount  />
      </Route>
 
      <Route exact path="/">
            <HomePage />
      </Route>


      {/*<Route component={PageNotFound} />*/}
 
      </Switch>
    </Router>
  );
}

export default App;

