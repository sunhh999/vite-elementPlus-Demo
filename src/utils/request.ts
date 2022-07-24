import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
// 引入UIloading

const service = axios.create() // Request interceptors

service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// do something
		return config
	},
	(error: any) => {
		Promise.reject(error)
	}
) // Response interceptors

service.interceptors.response.use(
	async (response: AxiosResponse) => {
		// do something
	},
	(error: any) => {
		// do something
		return Promise.reject(error)
	}
)

export default service
