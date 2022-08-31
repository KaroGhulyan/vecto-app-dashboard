import { configureStore } from '@reduxjs/toolkit'
import adminsReducer from './adminsSlice'

export const store = configureStore({
    reducer: adminsReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch