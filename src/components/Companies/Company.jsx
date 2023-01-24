import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const Company = ({ name }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
export default Company;
