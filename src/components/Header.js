import '../assets/styles/Header.css'

export default function Header({filter, setFilter}) {


    // how to show all/active/inactive btns
    const handleFilter = (e) => {
        if (e == 'all') setFilter("all")
        else if (e == "active") setFilter("active");
        else setFilter("inactive");
    };
    
    return (
      <div className="header">
        <h1>Extensions List</h1>
        <div className="buttons">
          <button
            className={filter === "all" ? "active-button" : "inactive-button"}
            onClick={(e) => handleFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "active" ? "active-button" : "inactive-button"}
            onClick={(e) => handleFilter("active")}
          >
            Active
          </button>
          <button
            className={filter === "inactive" ? "active-button" : "inactive-button"}
            onClick={(e) => handleFilter("inactive")}
          >
            Inactive
          </button>
        </div>
      </div>
    );
}