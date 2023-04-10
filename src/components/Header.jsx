import { Grid, Button, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

function Header({ setOpenModal }) {
  return (
    <Grid
      container
      maxWidth="xl"
      justifyContent="center"
      alignItems="center"
      mb={2}
      mt={1.5}>
      <Grid item xs={6}>
        <Typography variant="h4">
          Manage <b>Employees</b>
        </Typography>
      </Grid>
      <Grid item>
        <Button
          type="button"
          variant="contained"
          onClick={() => setOpenModal("add")}
          startIcon={<PersonAddIcon />}>
          Add New
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
