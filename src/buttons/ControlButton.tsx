
import "../views/search-view/searchview.css";

interface ControlButtonProps {
    label: string;
    onClick?: () => void;
    size?: "small" | "large";
}

export default function ControlButton({ label, onClick, size = "small" }: ControlButtonProps) {
    const sizeClass = size === "large" ? "control-button-large" : "control-button";

    return (
        <button className={sizeClass} onClick={onClick}>
            {label}
        </button>
    );
}
