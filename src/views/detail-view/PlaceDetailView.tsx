import "./placedetailview.css";
import Footer from "../../footer/Footer.tsx";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useParams } from "wouter";

export default function PlaceDetailView() {
    const [, navigate] = useLocation();
    const { id } = useParams();
    const [place, setPlace] = useState<any>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/places/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data))
            .catch(err => console.error("Failed to fetch place:", err));
    }, [id]);

    if (!place) return <div className="loading">Loading...</div>;

    return (
        <div className="place-detail-wrapper">
            <div className="place-detail-content">
                <h1 className="place-title">{place.title}</h1>

                <div className="carousel">
                    {place.additionalImages.map((img: string, index: number) => (
                        <img
                            key={index}
                            src={img}
                            className={`carousel-image ${index === 0 ? "active" : ""}`}
                            alt={`Slide ${index + 1}`}
                        />
                    ))}
                    <div className="carousel-indicators">
                        <span className="dot active" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                </div>

                <p className="place-description">{place.extendedDescription}</p>
                <hr className="separator" />

                <div className="button-group">
                    <button
                        className="btn directions"
                        onClick={() => navigate(`/map?to=${place.id}`)}
                    >
                        Directions
                    </button>
                    <button
                        className="btn save"
                        onClick={async () => {
                            const username = localStorage.getItem("user");
                            if (!username) return;
                            await fetch("http://localhost:3000/places/save", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ username, placeId: place.id }),
                            });
                            navigate("/saved");
                        }}
                    >
                        Save
                    </button>
                    <button className="btn go-back" onClick={() => navigate("/search")}>
                        Go Back
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
