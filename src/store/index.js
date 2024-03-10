import {configureStore} from "@reduxjs/toolkit"
import ExampleReducer from "../reducers/example-slice"

export default configureStore(
    {
        reducer:ExampleReducer,
        devTools: process.env.NODE_ENV !== 'production',
    }
);