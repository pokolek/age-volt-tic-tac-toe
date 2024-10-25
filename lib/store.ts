import { configureStore } from '@reduxjs/toolkit';
import { stationsApi } from './features/api/stationsApi';
import stationNameReducer from './features/stationNameSlice';

export const store = configureStore({
  reducer: {
    [stationsApi.reducerPath]: stationsApi.reducer,
    stationName: stationNameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stationsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
