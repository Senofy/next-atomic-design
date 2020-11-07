import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AccountState {
	id: string
	loading: boolean
	error: string
}

const initialState: AccountState = {
	id: '',
	loading: false,
	error: '',
}

const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		loadUserSuccess: (state, { payload }: PayloadAction<string>) => {
			state.id = payload
			state.loading = false
		},
		loadUserError: (state, { payload }: PayloadAction<string>) => {
			state.error = payload
			state.loading = false
		},
		loadUserLoading: (state) => {
			state.loading = true
			state.error = ''
		},
	},
})

export const { actions: accountActions } = accountSlice
export default accountSlice.reducer
