import React, { Component } from 'react'
import {Avatar,Button,Paper,Grid,TextField,Link,Typography,FormControlLabel,Checkbox} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
export default class Login extends Component{
    render(){
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'16px 0'}
    const textsyl={margin:'16px 0'}
    const kol={margin:'18px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' style={textsyl} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' style={textsyl} fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography style={kol} > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" style={kol}>
    {'© '}
     <Link color="inherit" href="https://mui.com/">
       Palwan Gym
    </Link>{' '}
    {new Date().getFullYear()}     {'.'}
   </Typography>
            </Paper>
        </Grid>
    );
}
}
