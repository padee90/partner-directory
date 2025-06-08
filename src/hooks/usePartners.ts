import { useState, useEffect } from "react";
import { Partner } from "../types";

export function usePartners(searchTerm: string, selectedCountry: string) {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("http://localhost:3001/partners");

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
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, [searchTerm, selectedCountry]);

  return { partners, loading, error };
}
