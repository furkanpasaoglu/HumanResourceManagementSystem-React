import App from "../App";
import axios from "axios";

export default class ResumeService {
    apiUrl = process.env.REACT_APP_API_URL + "resumes";

    getResumes(){
        return axios.get(this.apiUrl+"/getAll")
    }

    add(resume){
        return axios.post(this.apiUrl+"/add",resume)
    }

    findByCandidateId(id){
        return axios.get(this.apiUrl+"/findByCandidateId?id="+id)
    }

    addImage(id,file){
        return axios.post(this.apiUrl+"/addImage",{id,file})
    }
}