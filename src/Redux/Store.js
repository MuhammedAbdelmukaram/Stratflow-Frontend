import { configureStore } from '@reduxjs/toolkit';
import flowsReducer from './FlowsSlice.js';
import sidebarReducer from './SidebarSlice.js';
import whatsNewReducer from './DashboardSlice.js';


const store = configureStore({
    reducer: {
        flows: flowsReducer,
        whatsNew: whatsNewReducer,
        sidebar: sidebarReducer,
    },
});

export default store;
