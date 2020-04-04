import axios from "axios";

const URL = "https://randomuser.me/api/?results=15&inc=name,email,phone,picture,registered"

// Export an object (users) with getUsers method 

export default {
  getUsers: function() {
    return axios.get(URL);
  }
};