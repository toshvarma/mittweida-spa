import React from "react";
import "../../views/search-view/searchview.css";
import "../title-card/titlecard.css"

interface SearchInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <div className="search-input-container">
            <input
                type="text"
                className="search-input"
                placeholder="Enter search term..."
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
