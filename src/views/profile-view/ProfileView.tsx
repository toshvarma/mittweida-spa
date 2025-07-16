// src/views/ProfileView.tsx
import "./profileview.css";
import LargeButton from "../../buttons/LargeButton.tsx";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Footer from "../../footer/Footer.tsx";

export default function ProfileView() {
    const [username, setUsername] = useState("");
    const [, navigate] = useLocation();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUsername(storedUser);
        }
    }, []);

    return (
        <div className="profile-container">
            <div className="profile-content">
                <h1 className="greeting">
                    Hello, <span className="username">{username}</span>
                </h1>

                <LargeButton label="Settings" onClick={() => navigate("/settings")} />
                <LargeButton label="Saved Trips" onClick={() => navigate("/saved")} />
            </div>

            <Footer />
        </div>
    );
}
