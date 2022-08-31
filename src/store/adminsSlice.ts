import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AdminsState {
    admins: []
}

const initialState: AdminsState = {
    admins: [],
}

export const adminSlice = createSlice({
    name: 'admins',
    initialState,
    reducers: {
        setAdmins: (state, action: PayloadAction<[]>) => {
            console.log(action)
            state.admins = [...state.admins,...action.payload]
        },
    },
})

export const { setAdmins } = adminSlice.actions
export const admins = (state:AdminsState) => state.admins

export default adminSlice.reducer