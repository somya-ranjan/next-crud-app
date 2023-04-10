import React from "react";
import CustomModal from "../customComp/modal/CustomModal";
import { Box, Button, Typography } from "@mui/material";

function DeleteEmployeeConfirmation(props) {
  const { open, setOpen, employeeData } = props;
  console.log(employeeData);

  return (
    <CustomModal open={open} setOpen={setOpen} modalTitle="Delete Employee">
      <Box>
        <Typography variant="h6" textAlign="center" mt={1} mb={3}>
          Are you sure you want to delete this employee?
        </Typography>
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginRight: 2,
              background: "lightGray",
              color: "black",
              "&:hover": { background: "lightGray" },
            }}
            onClick={() => setOpen(false)}>
            No
          </Button>
          <Button type="submit" variant="contained" color="error">
            Yes
          </Button>
        </Box>
      </Box>
    </CustomModal>
  );
}

export default DeleteEmployeeConfirmation;
