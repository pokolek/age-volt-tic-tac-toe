'use client';

import StationList from '../StationList';
import { RootState, useAppSelector } from '@/lib/store';

const HomePage = () => {
  const stationName = useAppSelector((state: RootState) => state.stationName);

  return (
    <div>
      <p>{stationName ? `Saved Station: ${stationName}` : 'No station name saved.'}</p>
      <StationList/>
    </div>
  );
};

export default HomePage;
