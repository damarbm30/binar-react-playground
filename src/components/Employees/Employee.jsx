import { TableCell, TableRow } from "@mui/material";

const Employee = ({ id, address, company }) => {
  const { street, suite, city, zipcode, geo } = address;
  const { name, catchPhrase, bs } = company;

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell>
        <p>{`Name: ${name}`}</p>
        <p>{`Catch Phrase: ${catchPhrase}`}</p>
        <p>{`BS: ${bs}`}</p>
      </TableCell>
      <TableCell>
        <p>{`Street: ${street}`}</p>
        <p>{`Suite: ${suite}`}</p>
        <p>{`City: ${city}`}</p>
        <p>{`Zipcode: ${zipcode}`}</p>
        <p>{`Geo: ${geo.lat}, ${geo.lng}`}</p>
      </TableCell>
    </TableRow>
  );
};
export default Employee;
