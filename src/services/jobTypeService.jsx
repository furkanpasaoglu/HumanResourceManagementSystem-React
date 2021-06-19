import axios from "axios";

export default class JobTypeService{
    apiUrl = process.env.REACT_APP_API_URL + "jobTypes";

    getJobTypes(){
        return axios.get(this.apiUrl+"/getAll")
    }
}