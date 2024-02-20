import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            const newTodo = {
                id: Date.now() + Math.random(),
                text: action.payload,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleTodo(state, action) {
            const findTodo = state.find((todo) => todo.id === action.payload);
            if(findTodo) {
                findTodo.completed = !findTodo.completed;
            }
        },
        deleteTodo(state, action) {
            const findIndex = state.findIndex((todo) => todo.id === action.payload);
            state.splice(findIndex, 1);
        }
    }
})

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export const todosSelector = (state) => state.todos;

export default todosSlice.reducer;