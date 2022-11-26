import { useState } from "react";
import { useGlobalCOntext } from "../context";
const Search = () => {
  const [text, setText] = useState("");

  const { setSearchTerm, fetchRandomMeal } = useGlobalCOntext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          className="form-input"
          type="text"
          placeholder="type favorite meal"
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          search
        </button>
        <button
          type="submit"
          className="btn btn-hipster"
          onClick={handleRandomMeal}
        >
          sub
        </button>
      </form>
    </header>
  );
};

export default Search;
