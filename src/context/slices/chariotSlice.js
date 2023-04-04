import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    commandes: [],
    total: 0
}

export const chariotSlice = createSlice({
    name: 'chariot',
    initialState,
    reducers: {
        addToChariot: (state, action) => {
            state.commandes.push(action.payload)
            state.total += action.payload.price
        },
        deleteFromChariot: (state, action) => {
            state.commandes=state.commandes.filter((row) => row.id !== action.payload.id)
            state.total -= action.payload.price

        }
    },
})

export const { addToChariot, deleteFromChariot } = chariotSlice.actions;
export default chariotSlice.reducer