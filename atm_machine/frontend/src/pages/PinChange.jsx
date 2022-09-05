import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export default function PinChange(){
	let history=useHistory()
	return(
		<>
		 <TextField id="outlined-basic" label="Previous Pin" variant="outlined" style={{display:'block'}} />
		 {/* <TextField id="outlined-basic" label="New Pin" variant="outlined" style={{display:'block'}}/> */}
		 <Button variant="contained">Submit</Button>
		 <Button variant="contained" onClick={()=>{history.push('/otp')}}>Forgot Pin</Button>
		</>
		)
	}
