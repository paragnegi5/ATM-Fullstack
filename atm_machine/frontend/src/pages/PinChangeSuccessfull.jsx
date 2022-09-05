import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function PinChangeSuccessfull(){
	return(
		<>
		 <TextField id="outlined-basic" label="Enter New Pin" variant="outlined" style={{display:'block'}} />
		 <Button variant="contained">Submit</Button>
		</>
		)
	}
