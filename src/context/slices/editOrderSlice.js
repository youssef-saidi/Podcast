import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
}

export const editOrderSlice = createSlice({
    name: 'editOrder',
    initialState,
    reducers: {
        isOpenEditOrder: (state) => {
            state.isOpen = !state.isOpen;
        }
    },
})

export const { isOpenEditOrder } = editOrderSlice.actions;
export default editOrderSlice.reducer