import "./Header.css";
import logo from "../../assets/icons/logo.png";
import searchIcon from "../../assets/icons/search.png";
import bookmarkIcon from "../../assets/icons/bookmark.png";
import userIcon from "../../assets/icons/user.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="CulturalApp logo" className="logo-img" />
        <div className="logo-text">CulturalApp</div>
        <div className="nav-links">
          <a href="#">Dashboard</a>
          <a href="#">Directory</a>
          <a href="#">Benefits</a>
          <a href="#">Events</a>
        </div>
      </div>

      <div className="header-right">
        <button className="add-partner" onClick={() => window.location.href='/addNewPartner'}>Add New Partner</button>
        <img src={searchIcon} alt="Search" className="header-icon" />
        <img src={bookmarkIcon} alt="Bookmark" className="header-icon" />
        <img src={userIcon} alt="User" className="header-icon" />
      </div>
    </header>
  );
}
