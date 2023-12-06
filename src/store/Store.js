import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/UserSlice'
import tareaSlice from './tareas/TareaSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        tareas: tareaSlice,
    }
})