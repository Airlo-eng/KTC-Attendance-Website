import {Route, Switch} from "react-router-dom";
import MainPage from "./pages/Main";
import RegisterPage from "./pages/Register";
import StudentPage from "./pages/StudentPage";
import ResetPage from "./pages/Reset";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC-WUxI7y7qnHs3KiB4PgnByKoYp_w2nwA",
//   authDomain: "ktc-attendance-app.firebaseapp.com",
//   databaseURL: "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "ktc-attendance-app",
//   storageBucket: "ktc-attendance-app.appspot.com",
//   messagingSenderId: "952066518331",
//   appId: "1:952066518331:web:73e3130bf3eb2fb8af9b1e",
//   measurementId: "G-NJQ5RZZFRC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

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
        <Route path="/student_info/:id">
          <StudentPage />
        </Route>
        <Route path="/reset">
          <ResetPage />
        </Route>
      </Switch>
    </div>

  );

}

export default App;
