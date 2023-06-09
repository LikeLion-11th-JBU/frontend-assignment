import { authService } from "fbase";
import React, { useState } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                data = await createUserWithEmailAndPassword(
                    authService,
                    email,
                    password
                  );
            } else {
                data = await signInWithEmailAndPassword(authService, email, password);
            }
            console.log(data);
        }
        catch (error) {
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocilClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;
        if (name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === "github") {
            provider = new GithubAuthProvider();
        }
        await signInWithPopup(authService, provider);
    } 
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="email"
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                />
                <input 
                    name="password"
                    type="text"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange}
                />
                <input
                type="submit"
                value={newAccount ? "Create Account" : "Sign In"}
                />
              {error}
            </form>
            <span onClick={toggleAccount}>
            {newAccount ? "Sign In" : "Create Account"}
            </span>
            <div>
                <button onClick={onSocilClick} name="google">Continue with Google</button>
                <button onClick={onSocilClick} name="github">Continue with Github</button>
            </div>
        </div>
    )
};

export default Auth;