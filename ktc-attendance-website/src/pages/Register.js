import RegisterForm from "../components/registration/RegisterForm";
import {useHistory} from "react-router";

function Register() {

    const history = useHistory();

    function addStudentHandler(studentData) {
        fetch(
            "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students.json",
            {
                method: "POST",
                body: JSON.stringify(studentData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        .then (() => {
            history.replace("/");
        });
    }

    return (

        <section>
            <RegisterForm onAddMeetup={addStudentHandler} />
        </section>

    );

}

export default Register;