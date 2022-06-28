import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import CreateAccount from "./CreateAccount";
import WithdrawMoney from "./WithdrawMoney";
import DepositMoney from "./DepositMoney";
import CheckBalance from "./CheckBalance";
import PinChange from "./PinChange";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";

export default class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Router>
        		<Routes>
          			<Route exact path="/" element={<HomePage />}/>
          			<Route path="/createaccount" element={<CreateAccount />} />
          			<Route path="/withdrawmoney" element={<WithdrawMoney />} />
          			<Route path="/depositmoney" element={<DepositMoney />} />
          			<Route path="/checkbalance" element={<CheckBalance />} />
          			<Route path="/pinchange" element={<PinChange />} />
        		</Routes>
    		</Router>
			);
	}
}

const appDiv = document.getElementById("app");
render(<App />,appDiv);