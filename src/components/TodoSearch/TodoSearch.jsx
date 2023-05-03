import React from "react";
import "./TodoSearch.css";
function TodoSearch({search, setSearch}) {

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={search}
      onChange={onChangeSearch}
    />
  );
}

export { TodoSearch };
