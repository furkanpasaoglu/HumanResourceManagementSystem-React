import App from "../App";
import axios from "axios";

export default class TechnologyService {
    apiUrl = process.env.REACT_APP_API_URL + "technologies";

    getTechnologies(){
        return axios.get(this.apiUrl+"/getAll")
    }

    add(technology){
        return axios.post(this.apiUrl+"/add",technology)
    }
}