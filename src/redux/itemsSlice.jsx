import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ids: {},
  product: null,
}

export const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productId = action.payload;
      if (state.ids[productId]) {
          state.ids[productId] += 1;
      } else {
          state.ids[productId] = 1;
      }
    },
    reduceItem: (state, action) => {
      const productId = action.payload
      state.ids[productId] -= 1
    },
    editQuantity: (state, action) => { 
      const id = action.payload.id
      const data = action.payload.data
      state.ids[id] = data
    },
    deleteItem: (state, action) => {
      const id = action.payload
      delete state.ids[id]
    },
    clearIds: (state) => {
      Object.keys(state.ids).forEach((key) => delete state.ids[key]);
    },
    selectProduct: (state, action) => {
      state.product = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, reduceItem, editQuantity, deleteItem, clearIds, selectProduct} = itemsSlice.actions

export default itemsSlice.reducer