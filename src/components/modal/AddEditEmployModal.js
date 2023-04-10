import { Box, Button, TextField, Typography } from "@mui/material";
import CustomModal from "../customComp/modal/CustomModal";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

function AddEditEmployModal(props) {
  const { open, setOpen } = props;

  return (
    <CustomModal
      open={open === "add" || open === "edit"}
      setOpen={setOpen}
      modalTitle={
        open === "add" ? "Add Employee" : open === "edit" ? "Edit Employee" : ""
      }>
      <Box>
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
            name="mobileNo"
            size="small"
            type="number"
          />
        </Box>
        <Box textAlign="right" mt={4}>
          <Button
            startIcon={<CloseIcon />}
            type="submit"
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
