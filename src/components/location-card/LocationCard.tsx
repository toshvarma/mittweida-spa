// src/components/location-card/LocationCard.tsx
import "./locationcard.css";
import { useLocation } from "wouter";

interface LocationCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default function LocationCard({ id, title, description, imageUrl }: LocationCardProps) {
    const [, navigate] = useLocation();

    return (
        <div className="location-card" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="card-overlay" />
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="read-more" onClick={() => navigate(`/place/${id}`)}>
                Read More
            </button>
        </div>
    );
}
