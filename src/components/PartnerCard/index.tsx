import { Partner } from "../../types";
import "./PartnerCard.css";
import { useState } from "react";

type PartnerCardProps = {
  partner: Partner;
  onToggleFavorite: (partnerId: string, currentValue: boolean) => void;
};

export default function PartnerCard({ partner, onToggleFavorite }: PartnerCardProps) {
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
        className={`favorite-button ${partner.isFavorite ? "favorited" : ""}`}
        onClick={() => onToggleFavorite(partner.id, !!partner.isFavorite)}
        aria-label={partner.isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {partner.isFavorite ? "♥" : "♡"}
      </button>
    </div>
  );
}

