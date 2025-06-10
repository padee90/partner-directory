import Autocomplete from './AutoComplete';
import useCountries from '../hooks/useCountries';
import { Country } from '../types';

interface CountryAutocompleteProps {
  onSelect?: (country: Country) => void;
}

const CountryAutocomplete = ({ onSelect }: CountryAutocompleteProps) => {
  const countries = useCountries();

  return (
    <Autocomplete
      items={countries}
      getLabel={(country) => country.name}
      onSelect={onSelect} 
    />
  );
};

export default CountryAutocomplete;
