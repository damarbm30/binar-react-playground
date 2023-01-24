import { Box, List } from "@mui/material";

import Email from "./Email";

const Emails = ({ users }) => {
  return (
    <Box>
      <h1>List of Emails</h1>
      <List>
        {users.map((user) => {
          return <Email key={user.id} email={user.email} />;
        })}
      </List>
    </Box>
  );
};
export default Emails;
