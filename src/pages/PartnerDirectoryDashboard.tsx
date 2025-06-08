import { useState } from "react";
import { usePartners } from "../hooks/usePartners";
import PartnerCard from "../components/PartnerCard";
import "./PartnerDirectoryDashboard.css";

export default function PartnerDirectoryDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const { partners, loading, error } = usePartners(searchTerm, selectedCountry);

  return (
    <div className="partner-directory-dashboard">
      <h1>Partner Directory</h1>

      {/* Filters section */}
      <div className="filters">
        {/* Autocomplete */}
        <input
          type="text"
          placeholder="Search Partners..."
          className="autocomplete-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Dropdown */}
        <select
          className="country-dropdown"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">All Countries</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
        </select>
      </div>

      {/* Partner Grid */}
      {loading &&
        Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="partner-card skeleton"></div>
        ))}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="partner-grid">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
}
