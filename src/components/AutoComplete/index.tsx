import React, { useState, useEffect } from "react";
import './AutoComplete.css'
interface AutocompleteProps<T> {
  items: T[];
  getLabel: (item: T) => string;
  placeholder?: string;
  onSelect?: (value: T) => void;
}

const Autocomplete = <T,>({
  items = [],
  getLabel,
  placeholder = "Search...",
  onSelect,
}: AutocompleteProps<T>) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const handleSelect = (item: T) => {
    const label = getLabel(item);
    setQuery(label);
    setDebouncedQuery(label);
    if (onSelect) onSelect(item);

    setIsOpen(false); // close dropdown
  };

  const filteredItems = items.filter((item) =>
    getLabel(item).toLowerCase().includes(debouncedQuery.toLowerCase())
  );

  return (
    <div className="autocomplete-wrapper">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
      />

      {isOpen && debouncedQuery && (
        <ul className="autocomplete-list">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="autocomplete-item"
              onClick={() => handleSelect(item)}
            >
              {getLabel(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
