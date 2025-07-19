import data from '../data.json'
import Extension from "./Extension";
import "../assets/styles/Extension.css";


export default function Main({filter}) {

// Dynamically import all .svg files from assets/images (Webpack only)
const images = require.context("../assets/images", false, /\.svg$/);

const logoMap = {};
images.keys().forEach((key) => {
  const fileName = key.replace("./", ""); // e.g., "logo-devlens.svg"
  logoMap[fileName] = images(key);
});

  console.log(data[0].isActive)
  
  function filterData() {

    let filtered;
    
    // if filter == all or none was choosen then return the whole data
    if (filter == "all" || filter == "") {
      return data;
    } else if (filter == "active") {
      filtered = data.filter((d) => d.isActive == true);
    } else {
      filtered = data.filter((d) => d.isActive == false);
    }
    return filtered;
  }

  const filteredData = filterData(data)


  return (
    <div className="main">
      {filteredData.map((d, index) => {
        return (
          <Extension
            key={index}
            logo={logoMap[d.logo]} // Use the imported image
            name={d.name}
            description={d.description}
          />
        );
      })}
    </div>
  );
}