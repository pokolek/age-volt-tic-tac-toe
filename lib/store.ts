import { configureStore } from '@reduxjs/toolkit';
import { stationsApi } from './features/api/stationsApi';
import stationNameReducer from './features/stationNameSlice';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [stationsApi.reducerPath]: stationsApi.reducer,
    stationName: stationNameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stationsApi.middleware),
});

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
