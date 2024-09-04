
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Yzg3ZDg0NmZlNGVjMGU2ZTk3ZjljOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNTQ2NTgwOSwiZXhwIjoxNzI1NzI1MDA5fQ._Eng7iWEqaad6VOj6ypI4qBWdSuooRCJw8PWwkkNtu0";


// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});


