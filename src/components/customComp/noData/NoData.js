import { Box } from "@mui/material";
import Image from "next/image";
import noDataIcon from "@/assets/icons/noDataIcon.jpg";

function NoData({ noDataMsg }) {
  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
      }}>
      <Image src={noDataIcon} height={100} />
      <Box>{noDataMsg}</Box>
    </Box>
  );
}

export default NoData;
NoData.defaultProps = {
  noDataMsg: "Data not found",
};
