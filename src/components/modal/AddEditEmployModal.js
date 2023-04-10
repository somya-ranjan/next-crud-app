import { useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import CustomModal from "../customComp/modal/CustomModal";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import { useFormik } from "formik";
import { addEditEmployeeValidation } from "@/validation/addEditEmployee";

function AddEditEmployModal(props) {
  const { open, setOpen, employeeData } = props;
  console.log(employeeData);

  // // validation
  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: addEditEmployeeValidation,
    initialValues: {
      fullName:
        open === "add" ? "" : open === "edit" ? employeeData.fullName : "",
      email: open === "add" ? "" : open === "edit" ? employeeData.email : "",
      address:
        open === "add" ? "" : open === "edit" ? employeeData.address : "",
      phone: open === "add" ? "" : open === "edit" ? employeeData.phone : "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // // // Reset form when modal close
  useEffect(() => {
    if (open === "add" || open === "edit") {
      formik.resetForm();
    }
  }, [open]);

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
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && formik.errors.fullName}
            helperText={
              formik.touched.fullName &&
              formik.errors.fullName &&
              formik.errors.fullName
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
            Address <sup style={{ color: "red" }}>*</sup>
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Address"
            name="address"
            type="text"
            multiline
            rows={2}
            padding="0"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && formik.errors.address}
            helperText={
              formik.touched.address &&
              formik.errors.address &&
              formik.errors.address
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
            name="phone"
            size="small"
            type="text"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && formik.errors.phone}
            helperText={
              formik.touched.phone && formik.errors.phone && formik.errors.phone
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
          <Button startIcon={<DoneIcon />} type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </CustomModal>
  );
}

export default AddEditEmployModal;
