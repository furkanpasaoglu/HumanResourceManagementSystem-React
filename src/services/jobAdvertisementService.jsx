import axios from "axios";

export default class JobAdvertisementService {
    apiUrl = process.env.REACT_APP_API_URL+"jobadvertisement";

    getJobAdvertisements(){
        return axios.get(this.apiUrl+"/getAll")
    }

    findByActiveTrue(){
        return axios.get(this.apiUrl+"/findByActiveTrue")
    }

    findByActiveTrueAndCreateDateAsc(){
        return axios.get(this.apiUrl+"/findByActiveTrueAndCreateDateAsc")
    }

    findByActiveTrueOrderByCreateDateDesc(){
        return axios.get(this.apiUrl+"/findByActiveTrueOrderByCreateDateDesc")
    }

    findByActiveTrueAndEmployerId(employerId){
        return axios.get(this.apiUrl+"/findByActiveTrueOrderByCreateDateDesc?employerId="+employerId)
    }

    update(jobAdvertisement){
        return axios.put(this.apiUrl+"/update",jobAdvertisement)
    }

    add(jobAdvertisement){
        return axios.post(this.apiUrl+"/add",jobAdvertisement)
    }
}