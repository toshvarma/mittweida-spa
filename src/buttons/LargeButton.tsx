import "./largebutton.css";

interface LargeButtonProps {
    label: string;
    onClick?: () => void;
}

export default function LargeButton({ label, onClick }: LargeButtonProps) {
    return (
        <button className="large-button" onClick={onClick}>
            {label}
        </button>
    );
}
