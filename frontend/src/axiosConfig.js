import axios from "axios";

// Determine API base URL based on environment
let apiBaseUrl;
if (process.env.NODE_ENV === 'development') {
    apiBaseUrl = 'http://localhost:5000';
} else if (process.env.NODE_ENV === 'production') {
    apiBaseUrl = process.env.REACT_APP_API_URL || '/';
}

axios.defaults.baseURL = apiBaseUrl;