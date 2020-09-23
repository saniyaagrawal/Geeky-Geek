import React from 'react'
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer'
import './Login.css'
import { Button } from '@material-ui/core';

function Login() {
    const [{user}, dispatch] =useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) => alert(error.message));
    }

    return (
        <div className='login'>
            <div className='login_contents'>
                <h1 className='login_heading'>Geeky Geek</h1>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={signIn}
                    className='login_button'
                    style={{backgroundColor:'hsl(209, 93%, 61%)'}}
                >
                    Login with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
