import axios from "axios";

export default class CiryService{
    getCities(){
        return axios.get("http://localhost:8080/api/cities/getAll")
    }
}