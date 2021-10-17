import {Route, Switch} from "react-router-dom";
import MainPage from "./pages/Main";
import RegisterPage from "./pages/Register";

function App() {

  return (

    <div>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/register_student">
          <RegisterPage />
        </Route>
      </Switch>
    </div>

  );

}

export default App;
