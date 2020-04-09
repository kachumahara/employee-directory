import React, { useState, useEffect } from "react";
import TableData from "./TableData.jsx";
import Navbar from "./Navbar.jsx";
import API from "../utils/API.js";
import TableContext from "../utils/TableContext";

// useState ----> [devState, setDevState]
const TableArea = () => {
  const [devState, setDevState] = useState({
    users: [],
    order: "descend",
    filteredUsers: [],

    // each heading is comprised of 3 key-value pairs
    // there are a total of 5 headings

    headings: [
      { name: "image", width: "10%", order: "descend" },
      { name: "name", width: "10%", order: "descend" },
      { name: "phone", width: "10%", order: "descend" },
      { name: "email", width: "10%", order: "descend" },
      { name: "dob", width: "10%", order: "descend" },
    ],
  });

  const sortHandler = (heading) => {
    let sortOrder = devState.headings
      .filter((element) => element.name === heading)
      .map((element) => element.order)
      .toString();

    const comparer = (a, b) => {
      if (sortOrder === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else if (heading === "dob") {
          return a[heading].age - b[heading.age];
        } else {
          return a[heading].localeCompare(b[heading]);
        }
      }

      // accounting for any missing values...
      // the order must be strictly equal to descend now (conditional dichotomy)
      // else, if order==='descend', then, if...(see below)
      else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else if (heading === "dob") {
          return b[heading].age - a[heading.age];
        } else {
          return b[heading].localeCompare(a[heading]);
        }
      }
    };

    const usersSorted = devState.filteredUsers.sort(comparer);
    const headingsUpdated = devState.headings.map(element => {
      element.order = element.name === heading ? sortOrder : element.order;
      return element

    });
    // spread syntax for incorporating consts

    setDevState({
      ...devState,
      filteredUsers: usersSorted,
      headings: headingsUpdated
    })
  }

  const deltaHandler = e => {
    const filter = e.target.value;
    const listsFiltered = devState.users.filter(item => {
      let vals = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`
      console.log(filter, vals)
      // indexOf() returns the position of the first occurrence of a substring

      if (vals.indexOf(filter.toLowerCase()) !== -1) {
        return item
      }
    })
    setDevState({
      ...devState,
      filteredUsers: listsFiltered
    })
  };
  // useEffect to call loading function w/ react only once

  useEffect(() => {
    API.getUsers()
    .then(results => {
      console.log(results.data.results)
      setDevState({
        ...devState,
        users: results.data.results,
        filteredUsers: results.data.results
      })
    })
  },
  // If CB present -->[]--> useEffect will only activate if vals in the list change
    // that is, if deltaHandler is executed due to search changes 
  []);
  // TableContext.Provider used with value (component props)
    // value contains data made available to component tree
    // There is another ternary operator here
    // if devState.filteredUsers.length is greater than 0
    // then load <TableData /> component
    // else load an empty div

  return (
    <TableContext.Provider
    value={{ devState, deltaHandler, sortHandler}}>
      <Navbar />
      <div className="data-area w-90 mx-auto">
        {devState.filteredUsers.length > 0 ? <TableData /> : <div></div>}
      </div>
    </TableContext.Provider>
  )
};

export default TableArea;