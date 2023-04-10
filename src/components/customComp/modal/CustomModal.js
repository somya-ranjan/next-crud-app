import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CustomModal(props) {
  const { children, open, setOpen, modalTitle } = props;

  // // function
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        keepMounted
        // onClose={handleClose}
        sx={{
          zIndex: "1300",
          margin: "auto",
          "& .MuiPaper-root": {
            width: {
              xs: "95%",
              sm: "70%",
              md: "45%",
              lg: "40%",
              xl: "30%",
            },
            margin: {
              xs: 0,
              sm: "32",
            },
          },
        }}
        aria-describedby="alert-dialog-slide-description">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 1,
            borderBottom: "2px solid black",
          }}>
          <DialogTitle
            sx={{
              color: "#000",
              fontSize: "22px",
              fontWeight: "bold",
              p: 0,
              m: 0,
            }}>
            {modalTitle}
          </DialogTitle>
          <DialogTitle
            sx={{
              color: "#000",
              fontSize: "22px",
              fontWeight: "bold",
              p: 0,
              m: 0,
            }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              // sx={{
              //   position: "absolute",
              //   right: 8,
              //   top: 8,
              // }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
        </Box>
        {/* <DialogTitle
          sx={{
            color: "#000",
            fontSize: "22px",
            margin: "auto",
            fontWeight: "bold",
            pb: 0,
          }}>
          {modalTitle}
        </DialogTitle>  */}

        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default CustomModal;
