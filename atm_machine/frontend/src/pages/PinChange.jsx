import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
export default function PinChange(){
	let history=useHistory()
	let loginstate=useSelector(state=>state.validateLogin)
	function otpgenerate(account_number){
		
		history.push('/otp')
	}
	return(
		<>
		 <TextField id="outlined-basic" label="Previous Pin" variant="outlined" style={{display:'block'}} />
		 {/* <TextField id="outlined-basic" label="New Pin" variant="outlined" style={{display:'block'}}/> */}
		 <Button variant="contained">Submit</Button>
		 <Button variant="contained" onClick={otpgenerate(loginstate.account_number)}>Forgot Pin</Button>
		</>
		)
	}
