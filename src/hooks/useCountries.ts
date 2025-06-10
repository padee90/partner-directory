import { fetchCountries } from "../service/countryService";
import { Country } from "../types";
import { useState, useEffect } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetchCountries()
      .then(setCountries)
      .catch((err) => console.error("Error", err));
  }, []);

  return countries;
};


export default useCountries;
