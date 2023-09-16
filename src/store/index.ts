import { configureStore } from "@reduxjs/toolkit";

import { themesReducer } from '../features/themes';

export const store = configureStore({
    reducer: {
        theme: themesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch