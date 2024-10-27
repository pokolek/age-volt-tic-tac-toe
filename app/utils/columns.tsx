import { GridColDef } from "@mui/x-data-grid";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const createColumns = (router: AppRouterInstance): GridColDef[] => [
  {
    field: 'stationName',
    headerName: 'Station Name',
    width: 200,
    renderCell: (params) => {
      const stationId = params.row.id;

      const handleClick = () => {
        router.push(`/stations/${stationId}`);
      };

      return (
        <button
          onClick={handleClick}
          style={{
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          {params.value}
        </button>
      );
    },
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
    valueGetter: (value) => {
      const { lat, lon } = value || {};
      return `${lat}, ${lon}`;
    },
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

export default createColumns;
