import axios from "axios";

export default class JobPositionService {
    apiUrl = process.env.REACT_APP_API_URL + "jobpositions";

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