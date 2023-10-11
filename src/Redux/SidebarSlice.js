import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        selectedElement: null,
    },
    reducers: {
        setSelectedElement: (state, action) => {
            state.selectedElement = action.payload;
        },
    },
});

export const { setSelectedElement } = sidebarSlice.actions;
export default sidebarSlice.reducer;
