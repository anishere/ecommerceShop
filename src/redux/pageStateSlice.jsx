import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  presentPage: 1,
}

export const pageStateSlice = createSlice({
  name: 'statePage',
  initialState,
  reducers: {
    selectedPage: (state, action) => {
      state.presentPage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectedPage } = pageStateSlice.actions

export default pageStateSlice.reducer