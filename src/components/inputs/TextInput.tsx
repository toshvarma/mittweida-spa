

interface TextInputProps {
    type: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({type, placeholder, value, onChange}: TextInputProps) {
    return (
        <input
        className="text-input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    )
};

