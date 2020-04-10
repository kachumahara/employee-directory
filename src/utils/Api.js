import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=400"

// Export an object (users) with getUsers method 

export default {
  getUsers: function() {
    return axios.get(BASEURL);
  }
};