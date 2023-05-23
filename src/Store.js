import { configureStore } from '@reduxjs/toolkit';
import flowsReducer from '../src/FlowsSlice.js';
import whatsNewReducer from '../src/DashboardSlice.js';


const store = configureStore({
    reducer: {
        flows: flowsReducer,
        whatsNew: whatsNewReducer,
    },
});

export default store;