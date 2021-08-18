import axios from 'axios'

class ApiDbd {

    API = axios.create({
        baseURL: 'https://dbd-api.herokuapp.com'
    })

    survival() {
        return this.API.get('/survivors')
    }

    killer() {
        return this.API.get('/killers')
    }

    perks() {
        return this.API.get('/perks')
    }
}

export default new ApiDbd()