import Cookie, { CookieSetOptions } from 'universal-cookie'
import { CryptoService } from './'

class CookieService {
	private readonly cookie: Cookie

	constructor() {
		this.cookie = new Cookie()
	}

	get(key: string) {
		return this.cookie.get(key)
	}

	getAccessToken(): string | null {
		const token: string | null = this.cookie.get('access_token')
		if (!token) return null

		return CryptoService.decrypt(token)
	}

	set(key: string, value: string, options?: CookieSetOptions) {
		this.cookie.set(key, value, options)
	}

	setAccessToken(value: string) {
		const encrypted = CryptoService.encrypt(value)
		const options: CookieSetOptions = {
			sameSite: 'strict',
			path: '/',
		}
		this.cookie.set('access_token', encrypted, options)
	}

	remove(key: string) {
		this.cookie.remove(key)
	}

	removeAccessToken() {
		this.cookie.remove('access_token')
	}
}

export default new CookieService()
