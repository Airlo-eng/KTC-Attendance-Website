import RegisterForm from "../components/registration/RegisterForm";
import {useHistory} from "react-router";
//import { getDatabase, ref, push, child, get } from "firebase/database";

function Register() {

    const history = useHistory();

    function addStudentHandler(studentData) {
        fetch(
            "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students/"+studentData.studentName+".json",
            {
                method: "PUT",
                body: JSON.stringify(studentData),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        .then (() => {
            history.replace("/");
        });
    }

    // function writeUserData(studentData) {
    //     const db = getDatabase();
    //     push(ref(db, 'students/'), {
    //       studentName: studentData.studentName,
    //       yearGroup: studentData.yearGroup
    //     });

    //     // history.replace("/");

    // }

    // const getData = () => {
    //     const dbRef = ref(getDatabase());
    //     get(child(dbRef, `students/`))
    //     .then((snapshot) => {
    //       if (snapshot.exists()) {
    //         console.log(snapshot.val());
    //       } else {
    //         console.log("No data available");
    //       }
    //     }).catch((error) => {
    //       console.error("error getting data", error);
    //     });
    // }
    
    // <button onClick={getData}> Read button </button> 


    return (
        <section>
            <RegisterForm onAddStudent={addStudentHandler} />
        </section>
    );

}

export default Register;