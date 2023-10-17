import { configureStore } from '@reduxjs/toolkit';

import { todosApi } from '@store/api';

import { settingsReducer } from '@features/settings';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
