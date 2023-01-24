import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { Companies, Emails, Employees } from "./components";
import { getUsers } from "./services/userServices";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <Grid container spacing={6} justifyContent="center">
      <Grid item>
        <Emails users={users} />
      </Grid>
      <Grid item>
        <Companies users={users} />
      </Grid>
      <Grid item xs md={4}>
        <Employees users={users} />
      </Grid>
    </Grid>
  );
}

export default App;
