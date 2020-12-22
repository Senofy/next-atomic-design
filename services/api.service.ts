import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { UserProfile } from '../utils'
import { CookieService } from './'

class ApiService {
	private readonly BASE_URL: string = process.env.NEXT_PUBLIC_API_URL
	private readonly pub: AxiosInstance // Axios instance for public fetch
	private readonly auth: AxiosInstance

	constructor() {
		const config: AxiosRequestConfig = {
			baseURL: this.BASE_URL,
		}

		const interceptorResponseFn = (response: AxiosResponse): AxiosResponse => response.data

		const interceptorErrorFn = (error) => {
			return Promise.reject({
				status: error.response.status,
				statusText: error.response.data.message,
				message: error.response.statusText,
			})
		}

		this.pub = axios.create(config)
		this.pub.interceptors.response.use(interceptorResponseFn, interceptorErrorFn)

		this.auth = axios.create(config)
		this.auth.interceptors.request.use(
			(config) => {
				const token = CookieService.getAccessToken()

				if (token) {
					config.headers.Authorization = `Bearer ${token}`
				}
				return config
			},
			(err) => Promise.reject(err)
		)
		this.auth.interceptors.response.use(interceptorResponseFn, interceptorErrorFn)
	}

	async getUserProfile(): Promise<UserProfile | null> {
		try {
			const user: UserProfile = await this.auth.get('users/me')
			return user
		} catch (error) {
			return null
		}
	}
}

export default new ApiService()
