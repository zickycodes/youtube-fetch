import axios from "axios";
const KEY = "AIzaSyAwaaS74vPdRIxrG5DuDDv6EqT9FdCtfmg";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY 
    }
})