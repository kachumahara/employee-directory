import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=400&inc=name,email,phone,picture,registered"

// Export an object (users) with getUsers method 

export default {
  getEmployees: function() {
    return axios.get(BASEURL);
  }
};