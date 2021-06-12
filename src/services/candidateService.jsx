import axios from "axios";

export default class CandidateService {
    apiUrl=process.env.HRMS_APP_API_URL + "candidates";

    getCandidates(){
        return axios.get(this.apiUrl+"/getAll")
    }

    add(candidate){
        return axios.post(this.apiUrl+"/add",candidate)
    }

    getByEmail(email){
        return axios.get(this.apiUrl+"/getByEmail?email="+email)
    }

    getByIdentityNumber(identityNumber){
        return axios.get(this.apiUrl+"/getByIdentityNumber?identityNumber="+identityNumber)
    }
}