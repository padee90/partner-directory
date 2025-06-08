import { useState, useEffect } from "react";
import { Partner } from "../types";


export function usePartners(searchTerm: string, selectedCountry: string) {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      setError("");

      try {
        const params = new URLSearchParams();

        if (searchTerm) {
          params.append("q", searchTerm);
        }

        if (selectedCountry) {
          params.append("country", selectedCountry);
        }

        let url = "http://localhost:3001/partners";
        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch partners");
        }

        const data = await response.json();
        setPartners(data);
      } catch (err) {
        console.error(err);
        setError("Error loading partners");
      } finally {
        setLoading(true);
      }
    };

    fetchPartners();
  }, [searchTerm, selectedCountry]);

  return { partners, loading, error };
}
