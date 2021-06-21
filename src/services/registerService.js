import axios from "axios";

export default class RegisterService{
    getJobSeekers(){
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }
    registerJobSeeker(values){
        return axios.post("http://localhost:8080/api/jobseekers/add",values)
    }
}