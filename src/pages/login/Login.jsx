import React, { useContext, useRef } from 'react';
import "./login.css";
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {

    const email = useRef();
    const password = useRef();

    // 
    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    }

    console.log(user);

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Fasta</h3>
                    <span className="loginDesc">Connect with friends and the world around you.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleLogin}>
                        <input
                            placeholder="Email"
                            type="email"
                            className="loginInput"
                            required
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            className="loginInput"
                            required
                            ref={password}
                            autoComplete={"true"}
                        />
                        <button className="loginButton">{isFetching ? "Loading.." : "Log In"}</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegButton">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
