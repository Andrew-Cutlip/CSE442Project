import React, {useEffect, useState} from "react";
import RedirectButton from "./RedirectButton"
import {GoogleLogin, GoogleLogout} from 'react-google-login';

function RegistrationForm(props) {

    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
    const [Submit, setSubmit] = useState(false)

    useEffect(() => {
       const requestOptions = {
           method: 'POST',
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
               username: Username,
               password: Password,
               email: Email
           })
       };
           if (Submit) {
            fetch("/register", requestOptions)
                .then(response => response.json)
                .then(data => console.log(data))
                .then(() => setSubmit(false))
                
            }
    }, [Submit, Password, Username, Email]);


    let handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
    };

    const clientId = "891542752976-2b518b2l45tl0foe8c17pjm1h76pcf79.apps.googleusercontent.com"
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const onLogInSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
        props.setAccount(res.profileObj);
    }
    const onFailureSuccess = (res) => {
        console.log('Login Failed:', res);
    }
    const onSignoutSuccess = (res) => {
        alert("You have been signed out successfully.")
        //props.setAccount("");
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }

    let handleUsername = (e) => {
        setUsername(e.target.value);
    };
    let handlePassword = (e) => {
        setPassword(e.target.value);
    }
    let handleEmail = (e) => {
        setEmail(e.target.value);
    };
    return (
        <>
            <h1>Register</h1>
                <form id="Register" name="Register"  className = "Register"  align = "Center" onSubmit={handleSubmit}>
                        <label>
                            UserName:
                            <input name="username" type="text" placeholder="Username" required onChange={handleUsername}/>
                        </label>
                        <label>
                            Password:
                            <input name="password" type="password" required onChange={handlePassword}/>
                        </label>
                        <label>
                            Email
                            <input name="email" type="email" required onChange={handleEmail}/>
                        </label>
                        <input type="submit" value="Submit" onClick = {handleSubmit}/>


           <RedirectButton text={"Already have an account: Login here"}
           onclick={() => props.onclick("login")}>

           </RedirectButton>

            {showLoginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLogInSuccess}
                    onFailure={onFailureSuccess}
                    cookiePolicy={'single_host_origin'}
                    className ="gsignin"
                /> : null

            }

            {showLogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
            </form>
        </>


    );
}
export default RegistrationForm;