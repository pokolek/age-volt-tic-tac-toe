"use client";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useFetchStationsQuery } from "../../../lib/features/api/stationsApi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import createColumns from "@/app/utils/columns";
import { Box } from "@mui/material";

const StationList = () => {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(25);
  const { data, isFetching } = useFetchStationsQuery({ page, size: pageSize, });

  const rows = data?.content ?? [];
  const router = useRouter();

  const columns = createColumns(router);

  return (
    <Box width="90vw" height="90vh" >
      <DataGrid
        loading={isFetching}
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        pagination
        paginationMode="server"
        rowCount={data?.totalElements ?? 0}
        paginationModel={{
          page: page,
          pageSize: pageSize,
        }}
        disableColumnSorting
        onPaginationModelChange={(model) => {
          setPage(model.page);
          setPageSize(model.pageSize);
        }}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default StationList;
