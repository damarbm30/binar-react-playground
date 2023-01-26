import { TableContainer, TableBody, TableCell, Table, TableHead, TableRow } from "@mui/material";
import Company from "./Company";

const Companies = ({ users }) => {
  const sortedCompanyAsc = users.sort((a, b) => {
    const second = a.company.name.toLowerCase();
    const first = b.company.name.toLowerCase();

    if (second > first) {
      return 1;
    } else if (second < first) {
      return -1;
    }

    return 0;
  });

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Company (Ascending)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedCompanyAsc.map((comp) => {
            const { id, company } = comp;
            return <Company key={id} name={company.name} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Companies;
