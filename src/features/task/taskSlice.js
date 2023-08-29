import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        name: "Task 1",
        description: "Task 1 description",
        completed: false
    },{
        id: "2",
        name: "Task 2",
        description: "Task 2 description",
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state,action) => {
            state.push(action.payload)
        },
        deleteTask: (state,action) => {
            const taskfound = state.find(task => task.id === action.payload )
            if(taskfound){
                state.splice(state.indexOf(taskfound),1)
            }
        },
        editTask: (state,action) => {
            const {id,name,description,completed} = action.payload;
            const taskfound = state.find(task => task.id === id )
            if(taskfound){
                taskfound.name = name
                taskfound.description = description
                taskfound.completed = completed
            }
        }
    }
})

export const { addTask,deleteTask,editTask } = taskSlice.actions
export default taskSlice.reducer