import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import { useHistory } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    formControl: {
      marginRight: theme.spacing(2),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Login() {
    const classes = useStyles();
    let history = useHistory();
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
	
	const sendData = () => {
      let payload = {
		username,
		password,
      }

      axios.post('http://localhost:5000/login',payload)
      .then(res=>{
        if(res.status===200){
          if(res.data.user.role==="admin"){
            history.push({
              pathname:'/admin',
              state:{
                data:res.data.user
              }
            })
          }
        }
        else{
          console.log(res)
        }
      })
    }

    return (
        <>
            <TextField className={classes.formControl} 
                      type="text" 
                      id="username" 
                      label="Username"
                      value={username}
                      helperText="Enter your Username"
                      onChange={(e)=>setUsername(e.target.value)}
            />
            <TextField className={classes.formControl} 
                      type="password" 
                      id="password" 
                      label="Password"
                      value={password}
                      helperText="Enter your password"
                      onChange={(e)=>setPassword(e.target.value)}
            />
            <Button className={classes.formControl} variant="contained" color="primary" onClick={sendData}>Register</Button>
        </>
    )
}

export default Login