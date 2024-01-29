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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handlechange} />
      </form>
    </div>
  );
}
export default SearchBar;
