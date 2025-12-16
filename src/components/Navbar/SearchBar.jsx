import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar({ products = [] }) {
    const [expanded, setExpanded] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const toggleExpand = () => setExpanded(!expanded);

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

    if (!value) {
        setResults([]);
        return;
    }

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
    };

    const handleClear = () => {
    setQuery("");
    setResults([]);
    setExpanded(false);
    };

    return (
        <div className={`search ${expanded ? "expanded" : ""}`}>
            <div className="icon" onClick={toggleExpand}>
                <i className="bx bx-search-alt"></i>
            </div>

            <div className="input-wrapper">
                <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
                />
                {query && (
                <div className="clear" onClick={handleClear}>
                    <i className="bx bx-x-circle"></i>
                </div>
                )}
            </div>

            {results.length > 0 && (
                <ul className="search-results">
                {results.map((product) => (
                    <li key={product.id} onClick={handleClear}>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}
