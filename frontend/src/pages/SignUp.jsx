import React, { useState } from 'react'
// import FormInput from './FormInput';
import axios from 'axios'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Popup from 'reactjs-popup';
import Verify from './Verify';
import { Alert } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      techTheak
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function SignUp() {
  const [exist,setexit]=useState(true);
  const [r,setr]=useState(false);
  const [name,setname]=useState('');
  const [roll,setroll]=useState('');
  const regis=()=>{
    console.log('naffo');
    axios.post('/register/registration',{
      
      userID:roll,
      userName:name
      
  }).then((res)=>{
    setr(res.data.status);
    setexit(res.data.status);
  })
  .catch((e)=>console.log("unsuccessfull submission"));
  console.log('verdict',r);

  
  }

    const classes = useStyles();
    return (
        <div>
           {!r?<div>   

<Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
<Avatar className={classes.avatar}>
<LockOutlinedIcon />
</Avatar>
<Typography component="h1" variant="h5">
SignUp
</Typography>
<div className={classes.form} noValidate>
<TextField
variant="outlined"
margin="normal"
required
fullWidth

value={name}
onChange={(e)=>{setname(e.target.value)}}
label="user Name"

autoComplete="userName"
autoFocus
/>
<TextField
variant="outlined"
margin="normal"
required
value={roll}
onChange={(e)=>{setroll(e.target.value)}}
fullWidth

label="Roll Number"
type="text"

autoComplete="current-password"
/>


{exist?<div></div>:<div >
  <Alert severity="error">* You are already registerd  or  roll number is incorrect   
  <Link href="/login" variant="body2">
                {" click to login"}
              </Link></Alert> 

  </div>}

<Button

type="submit"
fullWidth
variant="contained"
onClick={regis}
color="primary"
className={classes.submit}
>
Sign up
</Button>

</div>
</div>
<Box mt={8}>
<Copyright />
</Box>
</Container>
</div>:<Verify userID={roll}/>}

        </div>
    )
}

export default SignUp
