import './mapview.css';
import MapWidget from "../../components/map/MapWidget.tsx";
import Footer from "../../footer/Footer.tsx";

type MapViewProps = {
    embedded?: boolean;
}

export default function MapView({ }: MapViewProps) {
    return (
        <div className="map-view-page">
            <MapWidget />
            <Footer />
        </div>
    );
}
