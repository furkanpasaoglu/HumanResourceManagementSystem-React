import App from "../App";
import axios from "axios";

export default class WorkExperienceService {
    apiUrl = process.env.REACT_APP_API_URL + "workexperiences";

    getWorkExperiences(){
        return axios.get(this.apiUrl+"/getAll")
    }

    add(workExperience){
        return axios.post(this.apiUrl+"/add",workExperience)
    }

    findAllByOrderByEndDateDesc(){
        return axios.get(this.apiUrl+"/findAllByOrderByEndDateDesc")
    }
}