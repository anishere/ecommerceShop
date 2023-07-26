import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  total: 0,
  ids: {},
}

export const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState,
  reducers: {
    increaseItem: (state) => {
        state.total++
    },
    addItem: (state, action) => {
        const productId = action.payload;
        if (state.ids[productId]) {
            state.ids[productId] += 1;
        } else {
            state.ids[productId] = 1;
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { increaseItem, addItem } = itemsSlice.actions

export default itemsSlice.reducer