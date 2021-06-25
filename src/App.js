import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Login = React.lazy(() => import("./components/views/Login/Login"));
const Home = React.lazy(() => import("./components/views/Home/Home"));
function App() {
  return (
    <Router basename="/">
      <React.Suspense fallback={<div>Loading..</div>}>
        <Switch>
          <Route
            exact
            path="/login"
            name="Login"
            render={(props) => <Login {...props} />}
          />
          <Route
            exact
            path="/"
            name="Login"
            render={(props) => <Login {...props} />}
          />
          <Route
            path="/home"
            name={"dash"}
            render={(props) => <Home {...props} />}
          />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
