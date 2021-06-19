import axios from "axios";

export default class CityService {
    apiUrl = process.env.REACT_APP_API_URL + "cities";

    getCities(){
        return axios.get(this.apiUrl+"/getAll")
    }
}