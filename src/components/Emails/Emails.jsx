import { TableContainer, TableBody, TableCell, Table, TableHead, TableRow } from "@mui/material";
import Email from "./Email";

const Emails = ({ users }) => {
  const emails = users.map((email) => email.email);
  const sortedEmails = emails.sort().reverse();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Email (Descending)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedEmails.map((email, index) => {
            return <Email key={index} email={email} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Emails;
