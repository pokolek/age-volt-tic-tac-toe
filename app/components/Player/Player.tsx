"use client";
import { Box, Stack, Typography } from "@mui/material";
export default function Player({}) {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      <Stack direction="row" spacing={20}>
        <Typography variant="h5">Player 1</Typography>
        <Typography variant="h5">X</Typography>
      </Stack>
    </Box>
    
  );
}
