import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
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
        <DialogTitle
          sx={{
            color: "#000",
            fontSize: "22px",
            margin: "auto",
            fontWeight: "bold",
          }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogTitle
          sx={{
            color: "#000",
            fontSize: "22px",
            margin: "auto",
            fontWeight: "bold",
            pb: 0,
          }}>
          {modalTitle}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
}

export default CustomModal;
