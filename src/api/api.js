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

    oneSurvival(_id){
        return this.API.get(`/dbdsurvival/${_id}`)
    }
}

export default new ApiDbd()