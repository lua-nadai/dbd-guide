import axios from 'axios'
import { generatePath } from 'react-router-dom'

class ApiDbd {

    API = axios.create({
        baseURL: process.env.REACT_APP_DBD_GUIDE_API,
    })

    survival = async () => {
        try {
            const path = '/dbdsurvival'
            const url = generatePath(path)
            const result =  await this.API.get(url)
            return result
        } catch (error) {
            throw error.response
        }
    }

    killer = async () => {
        try {
            const path = '/dbdkiller'
            const url = generatePath(path)
            const result = await this.API.get(url)
            return result
        } catch (error) {
            throw error.response
        }
    }

    perks = async () => {
        try {
            const path = '/dbdperk'
            const url = generatePath(path)
            const result = await this.API.get(url)
            return result
        } catch (error) {
            throw error.response
       }
    }

    oneSurvival = async (id) => {
        try {
            const path = '/dbdsurvival/:id'
            const url = generatePath(path, { id })
            const result = await this.API.get(url, { params: { id } })
            return result
        } catch (error) {
            throw error.response
       }
    }

    oneKiller = async (id) => {
        try {
            const path = '/dbdkiller/:id'
            const url = generatePath(path, { id })
            const result = await this.API.get(url, { params: { id } })
            return result
        } catch (error) {
            throw error.response
       }
    }

    onePerk = async (id) => {
        try {
            const path = '/dbdperk/:id'
            const url = generatePath(path, { id })
            const result = await this.API.get(url, { params: { id } })
            return result
        } catch (error) {
            throw error.response
       }
    }
}

export default new ApiDbd()
