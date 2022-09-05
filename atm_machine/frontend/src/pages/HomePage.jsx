import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import { handleBreakpoints, width } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch,useSelector } from 'react-redux';
import { validateLogin, } from '../redux/action/loginActions'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function DepositMoney(){
	const loginstate=useSelector(state=>state.validateLogin)
	let history=useHistory();
	// console.log("faf")
	// if (loginstate.isloggedin){
	return(
		// <Box sx={{ flexGrow: 1 }}>
		// <Grid container spacing={2}>
		<Stack spacing={2} direction="row" style={{marginTop:"20px"}}>

      <Button variant="contained" onClick={()=>{history.push('/pinchange')}}>Pin Change</Button>
	  <Button variant="contained" onClick={()=>{history.push('/withdraw')}}>Withdraw</Button>
	  <Button variant="contained" onClick={()=>{history.push('/deposit')}}>Deposit</Button>
	  <Button variant="contained" onClick={()=>{history.push('/checkbalance')}}>Check Balance</Button>
	  <Button variant="contained" onClick={()=>{history.push('/transfer')}}>Transfer</Button>
    </Stack>
		// </Grid>
	//   </Box>
		)
	// }
	// else{
	// 	return(
	// 		<p>Invalid Login</p>
	// 		)
	// }
	}
