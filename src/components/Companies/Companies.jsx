import { Box, List } from "@mui/material";

import Company from "./Company";

const Companies = ({ users }) => {
  return (
    <Box>
      <h1>List of Companies</h1>
      <List>
        {users.map((user) => {
          const { id, company } = user;
          return <Company key={id} name={company.name} />;
        })}
      </List>
    </Box>
  );
};
export default Companies;
