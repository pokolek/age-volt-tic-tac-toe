'use client';

import { DataGrid, GridColDef, GridEventListener  } from '@mui/x-data-grid';
import { useFetchStationsQuery } from '../../../lib/features/api/stationsApi';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

const StationList = () => {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(25);
  const router = useRouter();
  const { data, error, isFetching } = useFetchStationsQuery({ page, size: pageSize });
  console.log(isFetching)

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 250,
    },
    {
      field: 'stationName',
      headerName: 'Station Name',
      width: 200,
    },
    {
      field: 'serialNumber',
      headerName: 'Serial Number',
      width: 150,
    },
    {
      field: 'state',
      headerName: 'State',
      width: 150,
    },
    {
      field: 'sectionName',
      headerName: 'Section Name',
      width: 200,
    },
    {
      field: 'currencyStation',
      headerName: 'Station Currency',
      width: 150,
    },
    {
      field: 'currencyUser',
      headerName: 'User Currency',
      width: 150,
    },
    {
      field: 'hardwareManufacturer',
      headerName: 'Manufacturer',
      width: 200,
    },
    {
      field: 'model',
      headerName: 'Model',
      width: 200,
    },
    {
      field: 'coordinate',
      headerName: 'Coordinates (lat, lon)',
      width: 200,
    },
    {
      field: 'connectorsCount',
      headerName: 'Connectors Count',
      width: 150,
    },
    {
      field: 'connectorsAvailableCount',
      headerName: 'Available Connectors',
      width: 150,
    },
    {
      field: 'maxPower',
      headerName: 'Max Power (W)',
      width: 150,
    },
    {
      field: 'plugTypes',
      headerName: 'Plug Types',
      width: 200,
    },
    {
      field: 'powerTypes',
      headerName: 'Power Types',
      width: 200,
    },
    {
      field: 'vatRate',
      headerName: 'VAT Rate (%)',
      width: 100,
    },
    {
      field: 'stickerCodes',
      headerName: 'Sticker Codes',
      width: 150,
    },
  ];

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    const stationId = params.row.id;
    router.push(`/stations/${stationId}`);
  };

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error loading stations.</p>;

  const rows = data?.content ?? [];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pagination
      paginationMode="server"
      rowCount={data?.totalElements ?? 0}
      paginationModel={{
        page: page,
        pageSize: pageSize,
      }}
      onPaginationModelChange={(model) => {
        setPage(model.page);
        setPageSize(model.pageSize);
      }}
      onRowClick={handleRowClick}
    />
  );
};

export default StationList;
