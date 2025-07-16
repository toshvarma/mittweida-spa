import { useState } from "react";
import { useLocation } from "wouter";
import Header from "../../header/Header.tsx";
import Footer from "../../footer/Footer.tsx";
import "./homeview.css";

export default function HomeView() {
    const [, navigate] = useLocation();
    const [isLoggedIn] = useState(false); // Replace with real auth logic

    return (
        <div className="home">
            <div className="background-wrapper">
                <img
                    src="/assets/mittweidahomescreen.jpg"
                    alt="Background"
                    className="home-background"
                />
                <div className="home-overlay" />
            </div>

            <Header isLoggedIn2={isLoggedIn} />

            <main className="home-content">
                <h1 className="welcome-text">Welcome.</h1>
                <p className="subtitle">
                    Rediscover nature.
                    <br />
                    Explore history.
                    <br />
                    Indulge in german culture.
                </p>
                <p className="tagline">
                    All at <strong>Mittweida.</strong>
                </p>
                <button
                    className="explore-button"
                    onClick={() => navigate("/map")}
                >
                    Explore the map
                </button>

                <div className="search-section">
                    <h2>Looking for<br />something specific?</h2>
                    <p>
                        Mittweida has something for everybody. With our advanced search
                        engine, you can find a list of activities and cool locations for
                        your enjoyment.
                    </p>
                    <button
                        className="search-button"
                        onClick={() => navigate("/search")}
                    >
                        Search
                    </button>
                </div>

            </main>
            <Footer />
        </div>
    );
}
