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

    
  };
};
