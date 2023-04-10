import { Grid, Button, Typography, Box } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function Header({ setOpenModal }) {
  return (
    <Grid container justifyContent="center" alignItems="center" mb={2} mt={1.5}>
      <Grid item xs={8.9} lg={6.3} xl={4.8}>
        <Typography variant="h4">
          Manage <b>Employees</b>
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Box textAlign="end">
          <Button
            type="button"
            variant="contained"
            onClick={() => setOpenModal("add")}
            startIcon={<PersonAddIcon />}>
            Add New
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Header;
