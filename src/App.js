import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import AdminHome from "./Components/Admin/AdminHome";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <AdminHome></AdminHome>
          </Route>
          <Route path="/dashboard"></Route>
        </Switch>
      </Router>

      {/* <CssBaseline></CssBaseline> */}
    </>
  );
}

export default App;
