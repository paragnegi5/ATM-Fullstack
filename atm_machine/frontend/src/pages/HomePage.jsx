import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import { Grid } from "@mui/material";
import { handleBreakpoints, width } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch,useSelector } from 'react-redux';
import { validateLogin, } from '../redux/action/loginActions'

export default function DepositMoney(){
	const loginstate=useSelector(state=>state.validateLogin)
	if (loginstate.isloggedin){
	return(
		 <p>This is the Home Page</p>
		)
	}
	else{
		return(
			<p>Invalid Login</p>
			)
	}
	}
