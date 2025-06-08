import { Partner } from "../../types";
import './PartnerCard.css'

type PartnerCardProps = {
  partner: Partner;
};

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="partner-card">
      <h3>{partner.name}</h3>
      <p>{partner.country}</p>
    </div>
  );
}
