import { configureStore } from '@reduxjs/toolkit'
import editUserReducer from './slices/editUserSlice'
import editOrderReducer from './slices/editOrderSlice'
import editProductReducer from './slices/editProductSlice'
import chariotReducer from './slices/chariotSlice'





export const store = configureStore({
    reducer: {
      isOpenEditUser: editUserReducer,
      isOpenEditOrder: editOrderReducer,
      isOpenEditProduct: editProductReducer,
      commandes:chariotReducer

    },
  })


