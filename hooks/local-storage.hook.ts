import { useState, useEffect } from 'react'
import { CryptoService } from '../services'
import { UserProfile } from '../utils'

type LocalStorageReturnType<T> = [T, (value: T) => void]

/**
 * Local Storage Hook
 * @param key
 * @param initialValue
 * @See https://usehooks-typescript.com/use-local-storage/
 */
export function useLocalStorage<T>(key: string, initialValue: T): LocalStorageReturnType<T> {
	// Get from local storage then
	// parse stored json or return initialValue
	const readValue = () => {
		// Prevent build error "window is undefined" but keep keep working
		if (typeof window === 'undefined') {
			return initialValue
		}
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(CryptoService.decrypt(item)) : initialValue
		} catch (error) {
			console.warn(`Error reading localStorage key "${key}":`, error)
			return initialValue
		}
	}
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState<T>(readValue)
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: T) => {
		// Prevent build error "window is undefined" but keep keep working
		if (typeof window === 'undefined') {
			console.warn(`Tried setting localStorage key "${key}" even though environment is not a client`)
		}

		try {
			// Allow value to be a function so we have the same API as useState
			const newValue = value instanceof Function ? value(storedValue) : value
			// Stringify and Encrypt
			const encrypted = CryptoService.encrypt(JSON.stringify(newValue))
			// Save to local storage
			window.localStorage.setItem(key, encrypted)
			// Save state
			setStoredValue(newValue)
			// We dispatch a custom event so every useLocalStorage hook are notified
			window.dispatchEvent(new Event('local-storage'))
		} catch (error) {
			console.warn(`Error setting localStorage key "${key}":`, error)
		}
	}
	// Read latest value from LocalStorage on hook mount
	useEffect(() => {
		setStoredValue(readValue())
	}, [])
	// Keep all instances hook sync
	useEffect(() => {
		const handleStorageChange = () => {
			setStoredValue(readValue())
		}

		// this only works for other documents, not the current one
		window.addEventListener('storage', handleStorageChange)
		// this is a custom event, triggered in writeValueToLocalStorage
		window.addEventListener('local-storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
			window.removeEventListener('local-storage', handleStorageChange)
		}
	}, [])
	return [storedValue, setValue]
}

/**
 * Simplify using access tokens in local storage
 * @param value - initial value
 */
export function useAccessToken(value?: string) {
	return useLocalStorage<string>('token', value ?? '')
}

/**
 * Simplify using user information in location in local storage
 * @param value initial value
 */
export function useUserProfile(value?: UserProfile) {
	return useLocalStorage<UserProfile>('user', value)
}
