import { createSlice } from '@reduxjs/toolkit';

export const stationNameSlice = createSlice({
  name: 'stationName',
  initialState: '',
  reducers: {
    setStationName: (state, action) => action.payload,
  },
});

export const { setStationName } = stationNameSlice.actions;
export default stationNameSlice.reducer;
