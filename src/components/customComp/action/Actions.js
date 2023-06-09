import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { nanoid } from "nanoid";

function Actions(props) {
  const { edit, remove } = props;

  const actions = [];
  edit &&
    actions.push(
      <IconButton aria-label="edit" onClick={edit} key={nanoid()}>
        <EditIcon />
      </IconButton>
    );
  remove &&
    actions.push(
      <IconButton aria-label="delete" onClick={remove} key={nanoid()}>
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
