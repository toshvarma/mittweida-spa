

interface TextInputProps {
    type: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
// differs from SearchInput.tsx, this is for the login and so on
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

