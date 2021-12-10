import axios from "axios";

class HttpService {

    static get(url: string) {
        return axios.get(url)
    }

    // for future :)
    static post(url: string, payload: any) {
        return axios.post(url, payload)
    }
}

export default HttpService