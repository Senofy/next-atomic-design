import React, { FC, createContext, useContext } from 'react'
import { UserProfile } from '../utils'
import { CookieService } from '../services'
import { useUserProfile } from '../hooks'

interface Context {
	user: UserProfile | null
	setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>
	isAuthenticated: () => boolean
	logout: () => void
}

const AuthContext = createContext<Context | undefined>(undefined)

export const AuthContextProvider: FC = ({ children }) => {
	const [user, setUser] = useUserProfile(null)
	const isAuthenticated = () => (user ? true : false)

	const logout = () => {
		CookieService.removeAccessToken()
		setUser(null)
	}

	const { Provider } = AuthContext

	return (
		<Provider
			value={{
				user,
				isAuthenticated,
				setUser,
				logout,
			}}
		>
			{children}
		</Provider>
	)
}

export function useAuthContext() {
	return useContext(AuthContext)
}
