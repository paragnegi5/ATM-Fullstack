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
 
 
function Login() {
    let history=useHistory();
    let dispatch=useDispatch()
    const [accnum,setAccnum] =useState(0)
    const [pin,setPin]=useState(0)
    const loginstate=useSelector(state=>state.validateLogin)
    const handlelogin =()=>{
        dispatch(validateLogin(accnum,pin))
        history.push('/')
    }

    const handleacnumchange=(e)=>{
        setAccnum(e.target.value)
    }

    const handlepasschange=(e)=>{
        setPin(e.target.value)
    }
 
    return (
      <Grid container
    direction="column"
    // justifyContent="center"
    alignItems="center"
    height="100vh"
    // style={{background:"rgb(33, 33, 33)"}}
    >
        <h1 style={{marginTop:"50px"}}>Login</h1>
        <TextField
          id="outlined-number-input"
          label="Account Number"
          type="number"
          style={{margin:"40px",width:"350px"}}
          onKeyUp={(e)=>handleacnumchange(e)}
        />
 
        <TextField
          id="outlined-password-input"
          label="Pin"
          type="password"
          autoComplete="current-password"
          style={{width:"350px"}}
          onKeyUp={(e)=>handlepasschange(e)}
        />

        <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" style={{marginTop:"50px", width:"150px",height:"45px"}} onClick={handlelogin}>
            Login
        </Button>
      <Button variant="contained" style={{marginTop:"50px", width:"150px",height:"45px"}} onClick={()=>{history.push('/createaccount')}}>Create Account</Button>
    </Stack>
    </Grid>
    )
    }
 
  export default Login;
 
 
 

