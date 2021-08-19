import axios from 'axios'

class ApiDbd {

    API = axios.create({
        baseURL: 'https://ironrest.herokuapp.com/'
    })

    survival() {
        return this.API.get('/dbdsurvival')
    }

    killer() {
        return this.API.get('/dbdkiller')
    }

    perks() {
        return this.API.get('/dbdperk')
    }
}

export default new ApiDbd()