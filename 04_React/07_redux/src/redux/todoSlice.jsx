import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todoApp",
    initialState: {
        value: "",
        todoList: []
    },
    reducers: {
        setValue: (state, componentInfoObj) => {
            console.log("1: ",componentInfoObj);
        },
        setTask: (state, componentInfoObj) => {
            console.log("2: ",componentInfoObj);
        }
    }
});


export default todoSlice;