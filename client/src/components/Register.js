import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField"
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    formControl: {
      marginRight: theme.spacing(2),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Register() {
    const classes = useStyles();

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [role,setRole] = useState("")
    const [email,setEmail] = useState("")

    const sendData = () => {
      let payload = {
        username,
        password,
        role,
        email
      }

      axios.post('/register',null,{
        params:{
          payload
        }
      })
      .then(res=>console.log(res))
    }

    return (
        <>
            <FormControl className={classes.formControl}>
              <InputLabel id="role">Role</InputLabel>
              <Select
                labelId="Role"
                id="role"
                value={role}
                onChange={e=>setRole(e.target.value)}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="pharmacist">Pharmacist</MenuItem>
                <MenuItem value="diagnostic">Diagnostic</MenuItem>
              </Select>
            </FormControl>
            <TextField className={classes.formControl} 
                      type="email" 
                      id="email" 
                      label="Email"
                      value={email}
                      helperText="Enter your email"
                      onChange={(e)=>setEmail(e.target.value)}
            />
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

export default Register