import App from "../App";
import axios from "axios";

export default class TechnologyService {
    apiUrl=App().apiUrl + "technologies";

    getTechnologies(){
        return axios.get(this.apiUrl+"/getAll")
    }

    add(technology){
        return axios.post(this.apiUrl+"/add",technology)
    }
}