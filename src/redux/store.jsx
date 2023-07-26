import { configureStore } from '@reduxjs/toolkit'
import pageStateSlice from './pageStateSlice'
import itemsSlice from './itemsSlice'

export const store = configureStore({
  reducer: {
    page: pageStateSlice,
    items: itemsSlice,
  },
})