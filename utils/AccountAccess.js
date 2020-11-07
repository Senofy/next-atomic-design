const TOKEN_KEY = 'TOKEN'

export const getToken = (tokenKey = TOKEN_KEY) => {
	if (localStorage && localStorage.getItem(tokenKey)) {
		return JSON.parse(localStorage.getItem(tokenKey))
	}

	return null
}

export const setToken = (value, tokenKey = TOKEN_KEY) => {
	if (localStorage) {
		localStorage.setItem(tokenKey, JSON.stringify(value))
	}
}

export const clearToken = (tokenKey = TOKEN_KEY) => {
	if (localStorage) {
		localStorage.removeItem(tokenKey)
	}
}
