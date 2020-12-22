import { useQuery } from 'react-query'

import { ApiService } from '../services'

export function useGetUserProfile() {
	return useQuery('users/me', async () => await ApiService.getUserProfile())
}
