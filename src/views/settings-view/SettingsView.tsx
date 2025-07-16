
import "./settingsview.css"
import LargeButton from "../../buttons/LargeButton.tsx";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Footer from "../../footer/Footer.tsx";

export default function SettingsView() {
    const [error, setError] = useState("");
    const [, navigate] = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    }; // takes the user to the home page if they click on Log Out

    const handleDeleteAccount = () => {
        setError("you cannot delete this account.");
    }; // accounts cannot be deleted as of now because there is no code to handle this process properly :/

    return (
        <div className="settings-container">
            <div className="settings-content">
                <h1 className="settings-title">Settings</h1>
                <LargeButton label="Log Out" onClick={handleLogout} />
                <LargeButton label="Delete Account" onClick={handleDeleteAccount} />
                {error && <div className="delete-error">{error}</div>}
            </div>
            <Footer />
        </div>
    );
}
