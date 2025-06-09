import { useState, useEffect, useCallback } from "react";
import { Partner } from "../types";

export function usePartners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPartners = useCallback(async (searchTerm: string, selectedCountry: string) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8000/partners");

      if (!response.ok) {
        throw new Error("Failed to fetch partners");
      }

      const data = await response.json();

      // Apply client-side filtering
      let filteredData = data;

      if (selectedCountry) {
        filteredData = filteredData.filter(
          (partner: Partner) => partner.country === selectedCountry
        );
      }

      if (searchTerm.trim() !== "") {
        filteredData = filteredData.filter((partner: Partner) =>
          partner.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
        );
      }

      setPartners(filteredData);
    } catch (err) {
      console.error(err);
      setError("Error loading partners");
      setPartners([]); // clear partners on error
    } finally {
      setLoading(false);
    }
  }, []);

  return { partners, loading, error, fetchPartners };
}
