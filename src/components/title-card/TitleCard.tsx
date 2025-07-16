
import "../../views/search-view/searchview.css";
import "./titlecard.css"


interface TitleCardProps {
    title: string;
    description: string;
    image: string;
}

export default function TitleCard({ title, description, image }: TitleCardProps) {
    return (
        <div className="title-card" style={{ backgroundImage: `url(${image})` }}>
            <div className="title-card-overlay">
                <h1>{title}</h1>
                <p>{description}</p>
                <button className="read-more">Read More</button>
            </div>
        </div>
    );
}
