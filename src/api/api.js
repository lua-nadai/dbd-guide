import axios from 'axios'

class ApiDbd {

    API = axios.create({
        baseURL: process.env.REACT_APP_DBD_GUIDE_API,
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

    oneKiller(_id){
        return this.API.get(`/dbdkiller/${_id}`)
    }

    onePerk(_id){
        return this.API.get(`/dbdperk/${_id}`)
    }
}

export default new ApiDbd()