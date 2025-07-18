import logo from "../assets/images/logo.svg"; // adjust path based on your file structure
import sun from "../assets/images/icon-sun.svg"; // adjust path based on your file structure
import moon from "../assets/images/icon-moon.svg"; // adjust path based on your file structure

import "../assets/styles/Theme.css";


export default function Theme(prop) {
    let isDarkMode = true
  return (
    <div className="theme">
      <img src={logo} alt="Logo" className="logo" style={{ color: "white" }} />
      <div>
        {isDarkMode ? (
          //   if in darkmode show light mode
          <button className="lightMode">
            <img src={sun} alt="Light Mode" />
          </button>
        ) : (
          <button className="darkMode">
            <img src={moon} alt="Dark Mode" />
          </button> 
        )}
      </div>
    </div>
  );
}
