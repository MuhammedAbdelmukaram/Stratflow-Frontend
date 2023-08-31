import { configureStore } from '@reduxjs/toolkit';
import flowsReducer from './FlowsSlice.js';
import whatsNewReducer from './DashboardSlice.js';


const store = configureStore({
    reducer: {
        flows: flowsReducer,
        whatsNew: whatsNewReducer,
    },
});

export default store;
