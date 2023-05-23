import { createSlice } from '@reduxjs/toolkit';

const whatsNewSlice = createSlice({
    name: "whatsNew",
    initialState: {
        showDiv: true,
    },
    reducers: {
        toggleDiv: (state) => {
            state.showDiv = !state.showDiv;
        },
    },
});

export const { toggleDiv } = whatsNewSlice.actions;

export default whatsNewSlice.reducer;