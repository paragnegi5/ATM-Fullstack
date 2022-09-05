// import React, { Component } from "react";

// export default function DepositMoney(){
// 	return(
// 		 <p>This is the Create Account Page</p>
// 		)
// 	}
import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch,useSelector } from 'react-redux';
import { createAccount } from '../redux/action/createAccountAction'
import { useHistory } from 'react-router-dom';

export default function CreateAccount() {
	const [name,setName] =  React.useState("");
	const [email,setEmail] =  React.useState("");
	const [lastname,setLastname] =  React.useState("");
    const [pin,setPin] =  React.useState(null);
	const [balance,setBalance] =  React.useState(null);
	let history=useHistory()
	let dispatch=useDispatch()
	const loginstate=useSelector(state=>state.validateLogin)
	function handlesignup()
	{
       dispatch(createAccount(name , lastname , email , balance , pin))
	   history.push('/login')
	}

	// useEffect(()=>{
	// 	history.push('/')
	// },[loginstate.isloggedin])
	return (
	  <Box
		component="form"
		sx={{
		  '& > :not(style)': { m: 1, width: '25ch' },
		}}
		noValidate
		autoComplete="off"
	  >
		
		<TextField id="outlined-basic" label="First Name" variant="outlined" style={{display:'block'}} onKeyUp={(e)=>setName(e.target.value)}/>
		<TextField id="outlined-basic2" label="Last Name" variant="outlined" style={{display:'block'}} onKeyUp={(e)=>setLastname(e.target.value)}/>
		<TextField id="outlined-basic2" label="Email" variant="outlined" style={{display:'block'}} onKeyUp={(e)=>setEmail(e.target.value)}/>
		<TextField id="outlined-basic2" label="Balance" variant="outlined" style={{display:'block'}} onKeyUp={(e)=>setBalance(e.target.value)}/>
		<TextField name="password" type="password" placeholder="password" label="Password" onKeyUp={(e)=>setPin(e.target.value)}/>
		<Button variant="contained" color="success" style={{marginTop:"100px", width:"150px",height:"45px"}} onClick={handlesignup}>
            Signup
        </Button>
		
	  </Box>
	);
  }
