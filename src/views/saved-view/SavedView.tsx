// src/views/SavedView.tsx
import "./savedview.css";
import { useEffect, useState } from "react";
import LocationCard from "../../components/location-card/LocationCard.tsx";
import Footer from "../../footer/Footer.tsx";

interface Place {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default function SavedView() {
    const [places, setPlaces] = useState<Place[]>([]);

    const fetchSaved = async () => {
        const username = localStorage.getItem("user");
        if (!username) return;

        const res = await fetch(`http://localhost:3000/places/saved/${username}`);
        const data = await res.json();
        setPlaces(data);
    };

    const handleUnsave = async (placeId: string) => {
        const username = localStorage.getItem("user");
        if (!username) return;

        await fetch(`http://localhost:3000/places/unsave`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, placeId }),
        });

        setPlaces(prev => prev.filter(p => p.id !== placeId));
    };

    useEffect(() => {
        fetchSaved();
    }, []);

    return (
        <div className="saved-container">
            <div className="saved-content">
                <h1 className="saved-title">Saved Trips</h1>

                {places.length === 0 ? (
                    <p className="no-saved">no saved locations yet</p>
                ) : (
                    <div className="saved-cards">
                        {places.map((place) => (
                            <div key={place.id} className="saved-card-wrapper">
                                <button className="unsave-button" onClick={() => handleUnsave(place.id)}>×</button>
                                <LocationCard
                                    id={place.id}
                                    title={place.title}
                                    description={place.description}
                                    imageUrl={place.imageUrl}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
