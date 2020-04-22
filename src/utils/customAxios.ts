import axios, { AxiosRequestConfig, AxiosError } from "axios"
import { AsyncStorage } from "react-native"

const customAxios = axios.create()

customAxios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // Add the Authentication header to the config object        
        const access = AsyncStorage.getItem('access_token')
        const authHeader = access ? { Authorization: `Bearer ${access}` } : {}
        
        config.headers = { ...config.headers, ...authHeader }
        return config
    }, 

    (error: AxiosError) => {
        // Do something with request error
        return Promise.reject(error);
    }
)


export default customAxios