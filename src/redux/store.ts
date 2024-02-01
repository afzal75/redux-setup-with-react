import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feauters/counterSlice'
import Logger from './middleware/Logger'
// import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger)
})

console.log(store.getState())

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch