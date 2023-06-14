import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './AuthReducer'
import searchReducer from './SearchReducer'

export const Store = configureStore({
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    reducer:{
        authData : AuthReducer,
        search:searchReducer
    }
})