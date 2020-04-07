import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Header from "./Header";
import API from "../utils/API";
import Table from "./Table";
import "./App.css";
import moment from "moment";

class OmdbContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  componentDidMount() {
    API.getEmployees().then(({ data }) => {
      const employees = data.results.map((employee) => ({
        fullname: `${employee.name.first} ${employee.name.last}`,
        image: employee.picture.small,
        email: employee.email,
        phone: employee.phone,
        id: employee.registered.date,
      }));

      const sortname = employees.sort((a, b) =>
        a.fullname.localeCompare(b.fullname)
      );
      this.setState({ results: sortname });
    });
  }

  onSortUp = () => {
    const sortUp = this.state.results.sort((a, b) =>
      a.fullname.localeCompare(b.fullname)
    );
    this.setState({
      results: sortUp,
    });
  };

  onSortDown = () => {
    const sortDown = this.state.results.sort((a, b) =>
      b.fullname.localeCompare(a.fullname)
    );
    this.setState({
      results: sortDown,
    });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="container">
        <div>
          <Header></Header>
        </div>
      </div>
    );
  }
}
