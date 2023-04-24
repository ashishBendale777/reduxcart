import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CartItems: [],
    ItemCount: 0,
    CartTotalAmt: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.CartItems = []
        },

        addItem: (state, action) => {
            const newItem = { ...action.payload, qty: 1 }
            state.CartItems = [...state.CartItems, newItem]
            state.ItemCount = state.CartItems.length
        },

        increQty: (state, { payload }) => {
            const crtItem = state.CartItems.find((item) => item._id === payload.iid)
            crtItem.qty += 1
        },

        decreQty: (state, { payload }) => {
            const crtItem = state.CartItems.find((item) => item._id === payload.iid)
            crtItem.qty -= 1
        },
    }
})

export const { addItem, clearCart, increQty, decreQty } = cartSlice.actions
export default cartSlice.reducer