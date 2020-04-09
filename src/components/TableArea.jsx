import React, { useState, useEffect } from "react";
import TableData from "./TableData.jsx";
import Navbar from "./Navbar.jsx";
import API from "../utils/API.js";
import TableContext from "../utils/TableContext";

// useState ----> [devState, setDevState]
const TableArea = () => {
  const [devState, setDevState] = useState({
    users: [],
    order: 'descend',
    filteredUsers: [],

    // each heading is comprised of 3 key-value pairs
    // there are a total of 5 headings

    headings: [
      {name: 'image', width: '10%', order: 'descend'},
      {name: 'name', width: '10%', order: 'descend'},
      {name: 'phone', width: '10%', order: 'descend'},
      {name: 'email', width: '10%', order: 'descend'},
      {name: 'dob', width: '10%', order: 'descend'},
    ]  

  });

}
