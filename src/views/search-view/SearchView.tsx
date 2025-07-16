import "./searchview.css";
import Header from "../../header/Header.tsx";
import Footer from "../../footer/Footer.tsx";
import MapWidget from "../../components/map/MapWidget.tsx";
import LocationCard from "../../components/location-card/LocationCard.tsx";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

import {API_BASE_URL} from "../../config.ts";

interface Place {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    keywords?: string[];
    // the keywords? stores certain keywords for each place, so that they show up when you use the search function even with vague searches
}

export default function SearchView() {
    const [, navigate] = useLocation();
    const [query, setQuery] = useState("");
    const [allPlaces, setAllPlaces] = useState<Place[]>([]);
    const [historicPlaces, setHistoricPlaces] = useState<Place[]>([]);
    const [searchResults, setSearchResults] = useState<Place[]>([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/places`);
                const data = await res.json();

                setAllPlaces(data);

                // this is hardcoded to show the same two historic places on the search view
                const historic = data.filter((p: Place) => p.id === "3" || p.id === "4");
                setHistoricPlaces(historic);
            } catch (err) {
                console.error("Failed to load places:", err);
            }
        };

        fetchPlaces();
    }, []);

    const filterPlaces = (term: string): Place[] => {
        if (!term.trim()) return [];
        const lower = term.toLowerCase();

        return allPlaces.filter((place) =>
            place.title.toLowerCase().includes(lower) ||
            place.description.toLowerCase().includes(lower) ||
            place.keywords?.some(k => k.toLowerCase().includes(lower))
        );
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setSearchResults(filterPlaces(value));
    };

    return (
        <div className="search-page">
            <Header isLoggedIn2 ={false} />

            <main className="search-content">
                {/* Search Bar Code */}
                <div className="search-bar-wrapper">
                    <div className="search-bar">
                        <img src="/mittsearchicon.png" alt="Search Icon" />
                        <input
                            type="text"
                            placeholder="Enter search term..."
                            value={query}
                            onChange={handleInputChange}
                        />
                    </div>

                    {query && searchResults.length > 0 && (
                        <div className="search-dropdown">
                            {searchResults.map((place) => (
                                <div
                                    key={place.id}
                                    className="search-result-item"
                                    onClick={() => navigate(`/place/${place.id}`)}
                                >
                                    <img
                                        src={place.imageUrl}
                                        alt={place.title}
                                        className="thumbnail"
                                    />
                                    <div>
                                        <div className="title">{place.title}</div>
                                        <div className="description">{place.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Happening Nearby (The Map Embed) Code */}
                <h2 className="section-title">Happening Nearby</h2>
                <div className="map-container">
                    <div className="map-overlay" />
                    <MapWidget embedded />
                    <button className="view-map-button" onClick={() => navigate("/map")}>
                        View full map
                    </button>
                </div>

                {/* Historic Locations (Same 2 places) Code */}
                <h2 className="section-title">Historic Locations</h2>
                <div className="location-cards">
                    {historicPlaces.map(place => (
                        <LocationCard
                            key={place.id}
                            id={place.id}
                            title={place.title}
                            description={place.description}
                            imageUrl={place.imageUrl}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
