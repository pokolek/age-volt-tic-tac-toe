'use client';

import { useSelector } from 'react-redux';
import StationList from './../StationList/StationList';
import { RootState } from '@/lib/store';

const HomePage = () => {
  const stationName = useSelector((state: RootState) => state.stationName);

  return (
    <div>
      <p>{stationName ? `Saved Station: ${stationName}` : 'No station name saved.'}</p>
      <StationList/>
    </div>
  );
};

export default HomePage;
