import { Box, CircularProgress } from "@mui/material";

function SpinnerLoader() {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        zIndex: 999,
        transform: "translate(-50%,-50%)",
      }}>
      <CircularProgress sx={{ color: "#000" }} />
    </Box>
  );
}

export default SpinnerLoader;
