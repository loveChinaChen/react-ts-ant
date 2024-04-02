import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { AppThunk, AppDispatch,AppGetState } from '../index'
import { Todo } from '../type';

const initialState : Todo = {
    id:'111111',
    completed:true,
    text:'aaa'
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.id = action.payload.id;
        },
        toggleTodo(state, action: PayloadAction<Todo>) {
            state.text = action.payload.text;
        }
    }
});
export const { toggleTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;