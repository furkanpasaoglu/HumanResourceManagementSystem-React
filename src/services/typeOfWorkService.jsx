import axios from "axios";

export default class TypeOfWorkService {
    apiUrl = process.env.REACT_APP_API_URL + "typeOfWorks";

    getTypeOfWorks(){
        return axios.get(this.apiUrl+"/getAll")
    }
}