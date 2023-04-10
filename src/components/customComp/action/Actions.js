import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Actions(props) {
  const { edit, remove } = props;

  const actions = [];
  edit &&
    actions.push(
      <IconButton aria-label="edit" onClick={edit}>
        <EditIcon />
      </IconButton>
    );
  remove &&
    actions.push(
      <IconButton aria-label="delete" onClick={remove}>
        <DeleteIcon />
      </IconButton>
    );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      {actions}
    </Box>
  );
}

export default Actions;
