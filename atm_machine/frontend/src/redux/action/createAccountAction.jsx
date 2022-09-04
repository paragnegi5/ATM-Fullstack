import { VALIDATE_LOGIN } from "../actionTypes/actionTypes";
import axios from "axios"

function validCreateAccount(data){
	return {
		type:VALIDATE_LOGIN,
		payload:data
	}
}

export function createAccount(first_name , last_name , email , balance ,account_pin){
    console.log(first_name)
	return (dispatch)=>{
		return axios({
            method: 'post',
            url: 'http://localhost:8000/api/createaccount',
            data: {
                "email": email,
                "firstname": first_name,
                "lastname": last_name,
                "balance": balance,
                "account_pin": account_pin
            }
          }).then((rest)=>{console.log(rest)});
	}
}