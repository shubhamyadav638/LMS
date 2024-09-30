import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { products } from '../apis/callApi';

/// product..................
export const productThunk = createAsyncThunk("product", async () => {
  try {
    const result = await products();
    return result;
  } catch (e) {
    throw new Error(e.message);
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
    cart: [],
    error: null, 
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeitem: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    }
  },
  extraReducers: (builder) => {
    // product builder.......
    builder.addCase(productThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(productThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(productThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message; 
    });
  }
});

export const { addToCart, removeitem } = productSlice.actions;

export default productSlice.reducer;
