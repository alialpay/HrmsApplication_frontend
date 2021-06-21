import axios from "axios";

export default class RegisterService{
    registerJobSeeker(values){
        return axios.post("http://localhost:8080/api/jobseekers/register",values)
    }
}