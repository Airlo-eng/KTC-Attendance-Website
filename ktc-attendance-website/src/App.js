import {Route, Switch} from "react-router-dom";
import MainPage from "./pages/Main";
import RegisterPage from "./pages/Register";
import StudentPage from "./pages/StudentInfo";

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
        <Route path="/student_info">
          <StudentPage />
        </Route>
      </Switch>
    </div>

  );

}

export default App;
