import axios from "axios";

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }
    
    getByApplicationDeadline(date){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByApplicationDeadline?date="+date)
    }

    postJobAdvertisements(){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add")
    }

}