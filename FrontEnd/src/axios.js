import axios from "axios";

//base_url 
const instance = axios.create({
    //baseURL
    baseURL: 'http://localhost:8080/CarRental/crs/'
    // Header
    // timeout
})
export default instance;