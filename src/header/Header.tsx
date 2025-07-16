import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import "./header.css";

 export interface HeaderProps {
    isLoggedIn2: boolean;
}

export default function Header({ }: HeaderProps) {
    const [, navigate] = useLocation();
    const [profileImage, setProfileImage] = useState("/notloggedin.png");

    useEffect(() => {
        const storedImage = localStorage.getItem("profileImage");
        if (storedImage) {
            setProfileImage(storedImage);
        } else {
            setProfileImage("/notloggedin.png");
        }
    }, [location.pathname]); // Re-run on route change

    const isLoggedIn = localStorage.getItem("user") !== null;

    return (
        <header className="header">
            <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                <img src="/assets/mittlogo.png" alt="Mittweida Logo" className="header-logo" />
            </div>

            <div className="header-buttons">
                <button onClick={() => navigate("/map")}>Map</button>
                <button onClick={() => navigate("/search")}>Search</button>
            </div>

            <img
                src={profileImage}
                alt="Profile"
                className="header-profile"
                onClick={() => navigate(isLoggedIn ? "/profile" : "/login")}
            />
        </header>
    );
}
