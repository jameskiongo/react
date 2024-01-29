import "./SearchBar.css";
import { useState } from "react";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handlechange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handlechange} />
      </form>
    </div>
  );
}
export default SearchBar;
