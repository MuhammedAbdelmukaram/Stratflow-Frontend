import { createSlice } from '@reduxjs/toolkit';

const flowsSlice = createSlice({
    name: 'flows',
    initialState: {
        searchTerm: '',
        filter: 'All rules',
        flows: [
            { group: 4, id: 1, name: 'Flow 1', active: true, triggered: false },
            { group: 2, id: 2, name: 'Flow 2', active: false, triggered: true },
            { group: 2, id: 3, name: 'Flow 3', active: true, triggered: false },
            { group: 3, id: 4, name: 'Flow 3', active: true, triggered: false },
            { group: 4, id: 5, name: 'Flow 6', active: true, triggered: true },
            { group: 1, id: 6, name: 'Flow 1', active: true, triggered: false },
            { group: 1, id: 7, name: 'Flow 1', active: true, triggered: false },
        ],
        groups: [
        ],
        selectedGroup: null,
        currentPage: 1,
        flowsPerPage: 15,
    },
    reducers: {
        addFlow: (state, action) => {
            state.flows.push(action.payload);
        },
        removeFlow: (state, action) => {
            state.flows = state.flows.filter(flow => flow.id !== action.payload);
        },
        updateFlow: (state, action) => {
            const index = state.flows.findIndex(flow => flow.id === action.payload.id);
            if (index !== -1) {
                state.flows[index] = action.payload;
            }
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.selectedGroup = null;
            state.currentPage = 1;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
            state.currentPage = 1;
        },
        setFlows: (state, action) => {
            state.flows = action.payload;
        },
        setGroups: (state, action) => {
            state.groups = action.payload;
        },
        setSelectedGroup: (state, action) => {
            state.selectedGroup = action.payload;
            state.currentPage = 1;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        toggleActive: (state, action) => {
            const { id } = action.payload;
            const flow = state.flows.find((flow) => flow.id === id);
            if (flow) {
                flow.active = !flow.active;
            }
        }
    },
});

export const { addFlow, removeFlow, updateFlow, setSearchTerm,
    setFilter,
    setFlows,
    setGroups,
    setSelectedGroup,
    setCurrentPage,
    toggleActive, } = flowsSlice.actions;

export default flowsSlice.reducer;