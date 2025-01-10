// ConfigRedux/configIndex.js
import { createSlice } from '@reduxjs/toolkit'

const indexSlice = createSlice({
    name: 'index',
    initialState: {
        index: 0
    },
    reducers: {
        next: (state) => {
            state.index = (state.index + 1) % 4  // assuming names.length is 4
        },
        prev: (state) => {
            state.index = (state.index - 1 + 4) % 4  // adding 4 to handle negative numbers
        },
        select:(state,action)=>{
            state.index=action.payload
        }
    }
})

export const { next, prev, select } = indexSlice.actions
export default indexSlice.reducer