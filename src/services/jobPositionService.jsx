import App from "../App";
import axios from "axios";

export default class JobPositionService {
    apiUrl=App().apiUrl + "jobpositions";

    getJobPositions(){
        return axios.get(this.apiUrl+"/getAll")
    }

    add(jobPosition){
        return axios.post(this.apiUrl+"/add",jobPosition)
    }

    getByName(jobPositionName){
        return axios.get(this.apiUrl+"/getByName?jobPositionName="+jobPositionName)
    }
}