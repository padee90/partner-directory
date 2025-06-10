import {Country} from "../types"
export const fetchCountries = async (): Promise<Country[]> => {
  const res = await fetch('http://localhost:8000/countries');
  if (!res.ok) throw new Error(`Failed to fetch countries: ${res.status}`);

  const data: Country[] = await res.json();
  return data;
};
