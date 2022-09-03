import { VALIDATE_LOGIN } from "../actionTypes/actionTypes";
import axios from "axios"

function validateloginstate(data){
	return {
		type:VALIDATE_LOGIN,
		payload:data
	}
}

export function validateLogin(account_number,account_pin){
	return (dispatch)=>{
		return axios.get("http://127.0.0.1:8000/api/accounts").then((res)=>{
			    console.log(res.data)
			    for (let i =0;i<res.data.length;i++){
			    	if (res.data[i].account_number===parseInt(account_number) && res.data[i].account_pin===parseInt(account_pin)){
			    		console.log("parag")
			    		dispatch(validateloginstate(res.data[i]))
			    	}
			    }
			  })
	}
}