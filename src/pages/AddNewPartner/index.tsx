import { useState } from "react";
import CountryAutocomplete from "../../components/CountryAutoComplete";
import "./AddNewPartner.css";

export default function AddNewPartner() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountrySelect = (country: { name: string }) => {
    setSelectedCountry(country.name);
  };

  return (
    <section className="add-new-partner">
      <h2>Add New Information</h2>

      <form className="add-new-partner-form">
        <fieldset className="add-new-section">
          <legend>Partner Information</legend>

          <label htmlFor="partnerName">Name</label>
          <input
            id="partnerName"
            name="partnerName"
            type="text"
            autoComplete="name"
          />

          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </fieldset>

        <fieldset className="partner-section">
          <legend>Address details</legend>

          <label htmlFor="country">Country/Region</label>
          <CountryAutocomplete onSelect={handleCountrySelect} />
          <input type="hidden" name="country" value={selectedCountry} />

          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
          />
        </fieldset>

        <fieldset className="favourites-section">
          <legend>Add to Favourites</legend>

          <div>
            <input type="radio" id="yes" name="favourites" value="yes" />
            <label htmlFor="yes">Yes</label>
          </div>

          <div>
            <input type="radio" id="no" name="favourites" value="no" />
            <label htmlFor="no">No</label>
          </div>
        </fieldset>

        <button type="submit">Save changes</button>
      </form>
    </section>
  );
}
