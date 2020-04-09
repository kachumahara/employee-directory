import React, { useContext } from "react";
import TableContext from "../utils/TableContext.js";

const TableBody = () => {
  const context = useContext(TableContext);
  //formatting DOB to standard (MM/DD/YYYY), using .split and .join methods.
  // date appears as follows in the api object
  // "date": "1962-02-17T03:11:10.394Z",

  function FormatDOB(date) {
    const arrayDOB = date.split("-");
    const year = arrayDOB[0];
    const month = arrayDOV[1];
    const arrayDay = arrayDOB[2].split("T");
    const day = arrayDay[0];
    const formatDOB = [month, day, year].join("-");
    return formatDOB;
  }
  return (
    <tbody>
      {context.devState.filteredUsers[0] !== undefined &&
      context.devState.filteredUsers[0].name !== undefined ? (
        context.devState.filteredUsers.map(
          ({ login, name, picture, phone, email, dob }) => {
            return (
              <tr key={login.uuid}>
                <td className="align-middle" data-th="image">
                  <img
                    src={picture.medium}
                    alt={`profile image for ${name.first} ${name.last}`}
                    className="img-responsive"
                  />
                </td>
                <td className="align-middle" data-th="name">
                  {name.first} {name.last}
                </td>
                <td className="align-middle" data-th="phone">
                  {phone}
                </td>
                <td className="align-middle" data-th="email">
                  <a href={"mailto: " + email} target="__blank">
                    {email}
                  </a>
                </td>
                <td className="align-middle" data-th="dod">
                  {FormatDOB(dob.date)}
                </td>
              </tr>
            );
          }
        )
      ) : (
        // empty else :( <></> ) to end ternary function
        <></>
      )}
    </tbody>
  );
};

export default TableBody;
