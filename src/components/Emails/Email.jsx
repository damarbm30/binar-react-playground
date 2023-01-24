import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const Email = ({ email }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={email} />
      </ListItemButton>
    </ListItem>
  );
};
export default Email;
