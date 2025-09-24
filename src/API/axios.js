import axios from "axios";

const axiosInstance = axios.create({
  //for local server firebase function
  // baseURL: "http://127.0.0.1:5001/clone-24281/us-central1/api",
  // deployed version of amazon server in render.com
  baseURL: "https://amazon-backend-api-wqyq.onrender.com",
  // to run on local server 
  // baseURL: "http://localhost:5050",
});
export { axiosInstance };
