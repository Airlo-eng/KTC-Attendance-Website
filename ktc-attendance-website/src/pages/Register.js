import RegisterForm from "../components/registration/RegisterForm";
import {useHistory} from "react-router";

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

    return (
        <section>
            <RegisterForm onAddStudent={addStudentHandler} />
        </section>
    );

}

export default Register;