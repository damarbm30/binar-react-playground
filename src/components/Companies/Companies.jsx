import { TableContainer, TableBody, TableCell, Table, TableHead, TableRow } from "@mui/material";
import Company from "./Company";

const Companies = ({ users }) => {
  const companiesName = users.map((company) => company.name);
  const sortedCompName = companiesName.sort();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Company (Ascending)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedCompName.map((name, index) => {
            return <Company key={index} name={name} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Companies;
