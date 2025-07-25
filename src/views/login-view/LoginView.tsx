import './loginview.css';
import TextInput from "../../components/inputs/TextInput.tsx";
import Button from "../../buttons/Button.tsx";
import { useLocation } from "wouter";
import { useState } from "react";

import {API_BASE_URL} from "../../config.ts";

export default function LoginView() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [, navigate] = useLocation();

    const login = async (user: string, pass: string) => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: user, password: pass }),
            });

            if (!response.ok) throw new Error("Invalid credentials");

            const data = await response.json();
            localStorage.setItem("user", data.username);
            localStorage.setItem("profileImage", data.profileImage);
            navigate("/profile");
        } catch (err) {
            setError("The username or password was entered incorrectly.");
        }
    };

    const loginBruteForce = () => {
        console.log("Login button clicked", username, password);
        login(username, password);
    }; // this is not ACTUALLY a login brute-force, this is from when I was troubleshooting my login authentication

    const devLogin = async (user: string) => {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/user/${user}`);
            const data = await response.json();
            localStorage.setItem("user", data.username);
            localStorage.setItem("profileImage", data.profileImage);
            navigate("/profile");
        } catch (err) {
            setError("Developer login failed.");
        }
    }; //devLogin differs from the regular login only in the sense that the regular login is for when you manually input the credentials,
        // but devLogin is for when you used the preset buttons on the login screen so its faster.

    return (
        <div className="search-view">
            <div className="login-container">
                <h1> Hello! </h1>

                <TextInput
                    type="text"
                    placeholder="Enter username / e-mail..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextInput
                    type="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="forgot-password">Forgot Password?</div>
                <Button text="login" onClick={loginBruteForce} />
                {error && <div className="error-text">{error}</div>}
                <div className="signup-prompt">
                    new to Myttweida? <span className="signup-link">Sign up</span>
                </div>
            </div>

            <div className="dev-login-panel">
                <img src="/mittdeview.png" alt="dev gear" className="dev-icon" />
                <h2 className="dev-title">developer view only</h2>
                <p className="dev-paragraph">
                    to properly test the website, you can choose an account to proceed with here.
                    If you want to access this screen the next time you open this page, click
                    the white icon on the bottom-right of the screen.
                </p>

                <div className="dev-account" onClick={() => devLogin("admin1")}>
                    <img src="/mittadmin.png" alt="admin1" />
                    <div className="dev-info">
                        <div className="dev-username">admin1</div>
                        <div className="dev-password">qwerty</div>
                    </div>
                    <div className="dev-login-tag">login</div>
                </div>

                <div className="dev-account" onClick={() => devLogin("admin2")}>
                    <img src="/mittadmin.png" alt="admin2" />
                    <div className="dev-info">
                        <div className="dev-username">admin2</div>
                        <div className="dev-password">BREAKFAST</div>
                    </div>
                    <div className="dev-login-tag">login</div>
                </div>

                <div className="dev-account" onClick={() => devLogin("ramenLover2102")}>
                    <img src="/mittramen.png" alt="ramen" />
                    <div className="dev-info">
                        <div className="dev-username">ramenLover2102</div>
                        <div className="dev-password">zzwqICE03qs23#</div>
                    </div>
                    <div className="dev-login-tag">login</div>
                </div>
                <button className="dev-continue" onClick={() => navigate("/")}>
                    continue without logging in
                </button>
            </div>
        </div>
    );
}
