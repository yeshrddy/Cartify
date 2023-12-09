"use client"

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers: {
        addItem: (state, action)=>{
            state.items=[action.payload, ...state.items]    
        },                                                  
        removeItem: (state, action)=> {
            state.items = state.items.filter((item)=>{
                return item.id !== action.payload;
            });
        },
        clearItems: (state)=>{
            state.items=[];
        }
    }
})
console.log(cartSlice);

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;