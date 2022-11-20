import React, { useRef } from "react";
import "./styles.css";

type SearchProps = {
  children?: JSX.Element;
  onSubmit: (searchText: string) => void;
};

const Search = ({ onSubmit }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    onSubmit(inputRef?.current?.value || "");
  };

  return (
    <div className="wrap">
      <form className="search" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="searchTerm"
          placeholder="Type"
        />
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
