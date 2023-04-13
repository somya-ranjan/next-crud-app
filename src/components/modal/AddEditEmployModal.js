import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import CustomModal from "../customComp/modal/CustomModal";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useFormik } from "formik";
import { addEditEmployeeValidation } from "@/validation/addEditEmployee";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployeeAction,
  editEmployeeAction,
  getAllEmployeeAction,
} from "@/store/sagaActions";

function AddEditEmployModal(props) {
  const { open, setOpen, employeeData } = props;

  // // initial state
  const dispatch = useDispatch();

  // // Redux state
  const { isLoading } = useSelector((state) => state?.employee?.createEmployee);
  const editIsLoading = useSelector(
    (state) => state?.employee?.editEmployeeReducer?.isLoading
  );

  // // local state
  const [previousEmployeeData, setPreviousEmployeeData] = useState();
  const [isFormEditable, setIsFormEditable] = useState();

  // // function
  const onSuccess = () => {
    dispatch(getAllEmployeeAction());
    setOpen(false);
  };

  const filterObject = (data) => {
    let newObj = Object.keys(data)
      .filter((key) => key !== "_id" && key !== "__v")
      .reduce((acc, key) => {
        acc[key] = data[key];
        return acc;
      }, {});

    setPreviousEmployeeData(newObj);
  };

  // // validation
  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: addEditEmployeeValidation,
    initialValues: {
      name: open === "add" ? "" : open === "edit" ? employeeData.name : "",
      email: open === "add" ? "" : open === "edit" ? employeeData.email : "",
      designation:
        open === "add" ? "" : open === "edit" ? employeeData.designation : "",
      phoneNumber:
        open === "add" ? "" : open === "edit" ? employeeData.phoneNumber : "",
    },
    onSubmit: (values) => {
      if (open === "add") {
        dispatch(createEmployeeAction({ values, onSuccess }));
      } else {
        dispatch(
          editEmployeeAction({ values, id: employeeData?._id, onSuccess })
        );
      }
    },
  });

  // // // Reset form when modal close
  useEffect(() => {
    if (!open) {
      formik.resetForm();
    }
    if (open === "edit") {
      filterObject(employeeData);
    }
  }, [open]);

  // // checking previous value and current value
  useEffect(() => {
    if (open) {
      setIsFormEditable(
        JSON.stringify(formik.values) === JSON.stringify(previousEmployeeData)
      );
    }
  }, [formik.values]);

  return (
    <CustomModal
      open={open === "add" || open === "edit"}
      setOpen={setOpen}
      modalTitle={
        open === "add" ? "Add Employee" : open === "edit" ? "Edit Employee" : ""
      }>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Box mb={1}>
          <Typography variant="subtitle1">
            Full Name <sup style={{ color: "red" }}>*</sup>
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Full Name"
            size="small"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            helperText={
              formik.touched.name && formik.errors.name && formik.errors.name
            }
          />
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle1">
            Email <sup style={{ color: "red" }}>*</sup>
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Email"
            size="small"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
            helperText={
              formik.touched.email && formik.errors.email && formik.errors.email
            }
          />
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle1">
            Designation <sup style={{ color: "red" }}>*</sup>
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Designation"
            size="small"
            name="designation"
            type="text"
            value={formik.values.designation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.designation && formik.errors.designation}
            helperText={
              formik.touched.designation &&
              formik.errors.designation &&
              formik.errors.designation
            }
          />
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle1">
            Phone <sup style={{ color: "red" }}>*</sup>
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Phone"
            name="phoneNumber"
            size="small"
            type="number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && formik.errors.phoneNumber}
            helperText={
              formik.touched.phoneNumber &&
              formik.errors.phoneNumber &&
              formik.errors.phoneNumber
            }
          />
        </Box>
        <Box textAlign="right" mt={4}>
          <Button
            startIcon={<CloseIcon />}
            type="reset"
            variant="contained"
            sx={{
              marginRight: 2,
              background: "lightGray",
              color: "black",
              "&:hover": { background: "lightGray" },
            }}
            onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <LoadingButton
            disabled={isFormEditable}
            loading={isLoading || editIsLoading}
            startIcon={<DoneIcon />}
            type="submit"
            variant="contained">
            Submit
          </LoadingButton>
        </Box>
      </Box>
    </CustomModal>
  );
}

export default AddEditEmployModal;
