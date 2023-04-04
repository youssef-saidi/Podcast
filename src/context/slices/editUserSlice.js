import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
}

export const editUserSlice = createSlice({
    name: 'editUser',
    initialState,
    reducers: {
        isOpenEditUser: (state) => {
            state.isOpen = !state.isOpen;
        }
    },
})

export const { isOpenEditUser } = editUserSlice.actions;
export default editUserSlice.reducer