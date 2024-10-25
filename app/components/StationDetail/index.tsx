"use client";

import { useFetchStationDetailQuery } from "../../../lib/features/api/stationsApi";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setStationName } from "../../../lib/features/stationNameSlice";
import { Button } from "@mui/material";

const StationDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useFetchStationDetailQuery(id as string);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading station details.</p>;

  const handleSaveStationName = () => {
    if (data?.stationName) {
      dispatch(setStationName(data.stationName));
    }
  };

  return (
    <div>
      <h1>Station Name: {data?.stationName}</h1>
      <p>Serial Number: {data?.serialNumber}</p>
      <p>State: {data?.state}</p>
      <p>Manufacturer: {data?.hardwareManufacturer}</p>
      <p>Model: {data?.model}</p>


      <Button
        sx={{ mt: 5 }}
        onClick={handleSaveStationName}
        variant="outlined"
        color="primary"
        size="large"
      >
        Save Station Name
      </Button>

      <Button
        sx={{ mt: 5 }}
        onClick={() => router.back()}
        variant="outlined"
        color="primary"
        size="large"
      >
        Back
      </Button>

    </div>
  );
};

export default StationDetail;