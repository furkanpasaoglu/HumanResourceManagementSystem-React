import axios from "axios";

export default class EmployerService {
    apiUrl=process.env.HRMS_APP_API_URL+ "employers";

    getEmployers(){
        return axios.get(this.apiUrl+"/getAll")
    }

    add(employer){
        return axios.post(this.apiUrl+"/add",employer)
    }

    getByEmail(email){
        return axios.get(this.apiUrl+"/getByEmail?email="+email)

    }
}