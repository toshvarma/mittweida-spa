interface ButtonProps {
    text: string;
    onClick: () => void;
}

export default function Button({text, onClick}: ButtonProps) {
    return(
        <button className="login-button" onClick={onClick}>
            {text}
        </button>
    )
};