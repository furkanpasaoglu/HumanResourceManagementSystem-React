import axios from "axios";

export default class ForeignLanguageService {
    apiUrl=process.env.HRMS_APP_API_URL + "foreignlanguages";

    getForeignLanguages(){
        return axios.get(this.apiUrl+"/getAll")
    }

    add(foreignLanguage){
        return axios.post(this.apiUrl+"/add",foreignLanguage)
    }
}