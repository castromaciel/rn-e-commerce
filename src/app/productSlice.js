import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload) 
    },
    deleteProduct: (state, action) => {
      state.filter((product, i) => i !== action.payload.id)
    }
  }
})

export const { addProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer