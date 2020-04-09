import React, { Component } from "react";
import SearchForm from ".components/SearchForm";
import Header from ".components/Header";
import API from "../utils/Api";
import Table from ".components/Table";
import "./App.css";
// import moment from "moment";


class OmdbContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  componentDidMount() {
    API.getUsers().then(({ data }) => {
      const users = data.results.map((user) => ({
        fullname: `${user.name.first} ${user.name.last}`,
        image: user.picture.small,
        email: user.email,
        phone: user.phone,
        id: user.registered.date,
      }));
      this.setState({result: users})

      const sortname = users.sort((a, b) =>
        a.fullname.localeCompare(b.fullname)
      );
      // this.setState({ results: sortname });
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
        <div className="row search bar">
          <div className="col s4">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div className="col s8">
            <table className="table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>
                    Name
                    <button onClick={this.onSortUp}></button>
                  </th>
                  <th>Photo</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {this.state.result
                  .filter(
                    result.fullname.toLowerCase().includes(this.state.search)
                  )
                  .map((result) => (
                    <Table
                      photo={result.image}
                      name={result.fullname}
                      email={result.email}
                      phone={result.phone}
                      id={result.id}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default OmdbContainer;
