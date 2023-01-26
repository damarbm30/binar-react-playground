import { TableContainer, TableBody, TableCell, Table, TableHead, TableRow } from "@mui/material";
import Email from "./Email";

const Emails = ({ users }) => {
  const sortedEmailDesc = users.sort((a, b) => {
    const second = a.email.toLowerCase();
    const first = b.email.toLowerCase();

    if (second > first) {
      return -1;
    } else if (second < first) {
      return 1;
    }

    return 0;
  });

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Email (Descending)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedEmailDesc.map((email) => {
            return <Email key={email.id} email={email.email} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Emails;
