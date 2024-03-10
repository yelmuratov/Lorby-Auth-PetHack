import {configureStore} from "@reduxjs/toolkit"
import AuthService from '../reducers/AuthSlice';

export default configureStore(
    {
        reducer:AuthService,
        devTools: process.env.NODE_ENV !== 'production',
    }
);