import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
}

export const editProductSlice = createSlice({
    name: 'editProduct',
    initialState,
    reducers: {
        isOpenEditProduct: (state) => {
            state.isOpen = !state.isOpen;
        }
    },
})

export const { isOpenEditProduct } = editProductSlice.actions;
export default editProductSlice.reducer