import { Partner } from "../../types";
import "./PartnerCard.css";
import { useState } from "react";

type PartnerCardProps = {
  partner: Partner;
};

export default function PartnerCard({ partner }: PartnerCardProps) {
  const [isFavorite, setIsFavorite] = useState(partner.isFavorite ?? false);

  return (
    <div className="partner-card">
      {/* Logo */}
      {partner.logoFilename && (
        <img
          src={require(`../../assets/img/${partner.logoFilename}`)}
          alt={`${partner.name} logo`}
          className="partner-logo"
        />
      )}

      {/* Name */}
      <h3>{partner.name}</h3>

      {/* Country */}
      <p>{partner.country}</p>

      {/* Category pill */}
      {partner.category && (
        <div className="category-pill">{partner.category}</div>
      )}

      {/* Favorite heart */}
      <button
        className={`favorite-button ${isFavorite ? "favorited" : ""}`}
        onClick={() => setIsFavorite(!isFavorite)}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? "♥" : "♡"}
      </button>
    </div>
  );
}
