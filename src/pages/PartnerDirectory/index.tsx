import { useEffect, useState } from "react";
import { usePartners } from "../../hooks/usePartners";
import PartnerCard from "../../components/PartnerCard";
import SkeletonCard from "../../components/PartnerCard/SkeletonCard";
import "./PartnerDirectoryDashboard.css";

export default function PartnerDirectoryDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  
  const { partners, loading, error, fetchPartners } = usePartners();


  useEffect(() => {
    fetchPartners(searchTerm, selectedCountry);
  }, [searchTerm, selectedCountry, fetchPartners]);

  // Favorite toggle handler
  const handleToggleFavorite = async (partnerId: string, currentValue: boolean) => {
    try {
      const response = await fetch(
        `http://localhost:8000/partners/${partnerId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isFavorite: !currentValue }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update favorite");
      }

      // After update → trigger fresh fetch
      await fetchPartners(searchTerm, selectedCountry);
    } catch (error) {
      console.error(error);
      alert("Failed to update favorite");
    }
  };

  return (
    <div className="partner-directory-dashboard">
      <h1>Partner Directory</h1>

      {/* Filters section */}
      <div className="filters">
        {/* Autocomplete */}
        <label htmlFor="partner-search">Search Partners</label>
        <input
          id="partner-search"
          type="text"
          placeholder="Search Partners..."
          className="autocomplete-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Dropdown */}
        <label htmlFor="country-select">Country</label>
        <select
          id="country-select"
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
      <div className="partner-grid">
        {loading &&
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}

        {!loading && partners.length === 0 && (
          <p
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "32px",
              color: "#666",
            }}
          >
            No partners found.
          </p>
        )}

        {!loading &&
          partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
      </div>
    </div>
  );
}
