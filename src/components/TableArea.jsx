import React from "react";

function SearchForm(props) {
  return (
    <div>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search"
        id="search"
      />
    </div>
  );
}
export default SearchForm;
