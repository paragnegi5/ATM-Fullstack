import { loginInitialState } from "../initialStates/loginInitialState";
import { VALIDATE_LOGIN } from "../actionTypes/actionTypes";
import axios from "axios";

export function validateLogin(state=loginInitialState,action=''){
	switch(action.type){
		case VALIDATE_LOGIN:
			return {
	    			...state,
	    			account_number:action.payload.account_number,
					email:action.payload.email,
					firstname:action.payload.firstname,
					lastname:action.payload.lastname,
					balance:action.payload.balance,
					account_pin:action.payload.account_pin,
					isloggedin:true
			    	}
		default:
			return {
				...state
			}
	}
}