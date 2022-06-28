import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class HomePage extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<Grid container spacing={1}>
				<Grid item xs={12} align="center">
					<Typography component="h4" variant="h4">
						Homepage
					</Typography>
				</Grid>
			</Grid>
			);
	}
}