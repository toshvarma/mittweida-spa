import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import RoutingControl from "./RoutingControl.tsx";
import './mapwidget.css';

type MapWidgetProps = {
    embedded?: boolean;
};

const center: [number, number] = [50.9853, 12.9800];

const placeData: Record<
    string,
    { id: string; name: string; position: [number, number]; img: string; hideButtons?: boolean }
> = {
    center: {
        id: "0",
        name: "Mittweida Town Center",
        position: center,
        img: "/thumbs/center.jpg",
        hideButtons: true
    },
    hsmw: {
        id: "4",
        name: "Hochschule Mittweida (HSMW)",
        position: [50.9875, 12.9730],
        img: "/public/HM_HERO.jpg"
    },
    church: {
        id: "3",
        name: 'Stadtkirche "Unser Lieben Frauen"',
        position: [50.9834, 12.98163],
        img: "/public/church_hero.jpg"
    },
    pizzeria: {
        id: "2",
        name: "Pizzeria Dolomiti",
        position: [50.9863, 12.9792],
        img: "/public/pizza_hero.jpg"
    },
    stube: {
        id: "1",
        name: 'Gasthaus "Mittweida’s Stube"',
        position: [50.9784, 12.9822],
        img: "/public/german_hero.jpg"
    },
    reservoir: {
        id: "5",
        name: "Talsperre Kriebstein",
        position: [51.0305, 12.9993],
        img: "/public/dam_hero.jpg"
    },
    burgerwald: {
        id: "6",
        name: "Bürgerwald & Neudörfchen Area",
        position: [50.9890, 13.0050],
        img: "/public/wald_hero.jpg"
    },
    chennai: {
        id: "9999",
        name:"my home",
        position: [12.9196, 80.2372],
        img: '/public/9999.jpg'
    }

};

export default function MapWidget({ embedded = false }: MapWidgetProps) {
    const [destination, setDestination] = useState<[number, number] | null>(null);
    const [loc] = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(loc.split("?")[1]);
        const toId = query.get("to");
        if (toId) {
            const match = Object.values(placeData).find(p => p.id === toId);
            if (match) setDestination(match.position);
        }
    }, [loc]);

    return (
        <MapContainer
            className={embedded ? "map embedded" : "map"}
            center={center}
            zoom={embedded ? 13 : 15}
            scrollWheelZoom={!embedded}
            dragging={!embedded}
            doubleClickZoom={!embedded}
            zoomControl={!embedded}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {Object.values(placeData).map(place => (
                <Marker key={place.id} position={place.position}>
                    <Popup>
                        <div className="popup-content">
                            <img src={place.img} alt={place.name} className="popup-thumb" />
                            <strong className="popup-title">{place.name}</strong>
                            {!place.hideButtons && (
                                <div className="popup-buttons">
                                    <button
                                        className="popup-button"
                                        onClick={() => window.location.href = `/place/${place.id}`}
                                    >
                                        Read More
                                    </button>
                                    <button
                                        className="popup-button"
                                        onClick={() => setDestination(place.position)}
                                    >
                                        Directions
                                    </button>
                                </div>
                            )}
                        </div>
                    </Popup>
                </Marker>
            ))}

            {!embedded && destination && <RoutingControl waypoints={[center, destination]} />}
        </MapContainer>
    );
}
