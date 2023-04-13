import React from "react";
import CustomModal from "../customComp/modal/CustomModal";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployeeAction,
  getAllEmployeeAction,
} from "@/store/sagaActions";
import { LoadingButton } from "@mui/lab";

function DeleteEmployeeConfirmation(props) {
  const { open, setOpen, employeeData } = props;

  // // initial state
  const dispatch = useDispatch();

  // // Redux state
  const { isLoading } = useSelector((state) => state?.employee?.deleteEmployee);

  // // function
  const onSuccess = () => {
    dispatch(getAllEmployeeAction());
    setOpen(false);
  };

  const handelDelete = () => {
    dispatch(deleteEmployeeAction({ id: employeeData?._id, onSuccess }));
  };

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
          <LoadingButton
            loading={isLoading}
            type="submit"
            variant="contained"
            color="error"
            onClick={handelDelete}>
            Yes
          </LoadingButton>
        </Box>
      </Box>
    </CustomModal>
  );
}

export default DeleteEmployeeConfirmation;
