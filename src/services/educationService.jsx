import axios from "axios";

export default class EducationService {
    apiUrl = process.env.REACT_APP_API_URL + "educations";

    getEducations(){
        return axios.get(this.apiUrl+"/getAll")
    }

    add(education){
        return axios.post(this.apiUrl+"/add",education)
    }

    findAllByOrderByGraduationDateAsc(){
        return axios.get(this.apiUrl+"/findAllByOrderByGraduationDateAsc")
    }

    findAllByOrderByGraduationDateDesc(){
        return axios.get(this.apiUrl+"/findAllByOrderByGraduationDateDesc")
    }
}