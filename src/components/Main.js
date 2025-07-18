import React, { useState } from "react";
import data from '../data.json'
import Extension from "./Extension";
import "../assets/styles/Extension.css";


export default function Main() {
  const { isActive, setisActive } = useState(data.isActive);

// Dynamically import all .svg files from assets/images (Webpack only)
const images = require.context("../assets/images", false, /\.svg$/);

const logoMap = {};
images.keys().forEach((key) => {
  const fileName = key.replace("./", ""); // e.g., "logo-devlens.svg"
  logoMap[fileName] = images(key);
});


  return (
    <div className="main">
      {data.map((d, index) => {
        return (
          <Extension
            key={index}
            logo={logoMap[d.logo]} // Use the imported image
            name={d.name}
            description={d.description}
            isActive={isActive}
            setisActive={setisActive}
          />
        );
      })}
    </div>
  );
}
