import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasks';

export const store = configureStore({
    reducer:{
        task: tasksReducer,
    }
})