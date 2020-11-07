import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { useDispatch, useSelector } from 'react-redux'

import accountReducer, { accountActions } from './slices/account.slice'

// Store
const store = configureStore({
	reducer: {
		account: accountReducer,
	},
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

//! Custom Hooks
// Dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Selectors
export const useSelectAccount = () => useSelector((state: RootState) => state.account)

// Actions
export const useAction = () => ({
	...accountActions,
})

//! Store
export default store
