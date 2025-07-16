import "../../views/search-view/searchview.css";
import "../title-card/titlecard.css";
import "./locationbox.css";
import { Link } from "wouter";
import MapView from "../../views/map-view/MapView.tsx";

export default function LocationBox() {
    return (
        <div className="location-box">
            <Link href="/map" className="map-preview-link">
                <div className="map-preview-container">
                    <div className="embedded-map">
                        <MapView embedded/>
                    </div>

                    <div className="map-overlay">
                        <span className="map-overlay-text">View Full Map</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
