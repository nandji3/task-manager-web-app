import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { tasks: [] };

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.tasks.unshift(action.payload);
            },
            prepare: (payload) => ({
                payload: {
                    ...payload,
                    id: nanoid(),
                    createdAt: Date.now(),
                    status: 'pending',
                },
            }),
        },
        updateTask(state, action) {
            const index = state.tasks.findIndex(t => t.id === action.payload.id);
            if (index !== -1) state.tasks[index] = action.payload;
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(t => t.id !== action.payload);
        },
        toggleTaskStatus(state, action) {
            const task = state.tasks.find(t => t.id === action.payload);
            if (task) task.status = task.status === 'pending' ? 'done' : 'pending';
        },
    },
});

export const { addTask, updateTask, deleteTask, toggleTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;