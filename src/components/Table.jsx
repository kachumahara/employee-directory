import Reach from "react";

function Table(props) {
  return (
    <tr>
      <th>
        <img scr={props.photo} alt={props.name} />
      </th>
      <th>{props.name}</th>
      <th>{props.email}</th>
      <th>{props.phone}</th>
      <th>{props.id}</th>
    </tr>
  );
}

export default Table;
