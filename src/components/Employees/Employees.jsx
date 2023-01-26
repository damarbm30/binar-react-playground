import { TableContainer, TableBody, TableCell, Table, TableHead, TableRow } from "@mui/material";
import Employee from "./Employee";

const Employees = ({ users }) => {
  const filteredUsers = users.filter((user) => user.id % 2 === 0);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center" width="50%">
              Company
            </TableCell>
            <TableCell align="center" width="50%">
              Complete Address
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => {
            const { id, address, company } = user;

            return <Employee key={id} id={id} address={address} company={company} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Employees;
