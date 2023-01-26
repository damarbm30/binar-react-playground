import { TableCell, TableRow } from "@mui/material";

const Company = ({ name }) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
    </TableRow>
  );
};
export default Company;
