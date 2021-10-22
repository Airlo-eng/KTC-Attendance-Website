import {useParams} from "react-router-dom";
import {useState} from "react";

function StudentInfo() {

    //TODO: Filter out database with id. Add payment checker feature.
    //! STORE STUDENT DATA AS OBJECT NOT VARIABLE
    
    const {id} = useParams();
    const [studentInfo, setStudent] = useState("");

    function infoGetter() {
    
        fetch(
            "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students.json"
        )
        .then(response => response.json())
        .then(data => {

            Object.keys(data).filter(element => {
                if (data[element].studentName.toLowerCase() === id.toLowerCase()) {
                    setStudent(data[element]);
                }
                return data[element];
            })
            
        })

    }
    
    return (

        <div>

            <button className="btn-textfield" onClick={infoGetter}>
                Click for student info!
            </button>


            <br/><br/>
            {studentInfo.studentName}
            <br/><br/>
            {studentInfo.yearGroup}
            <br/><br/>
            {studentInfo.currentSchool}
            <br/><br/>
            {studentInfo.parentOrGuardian}
            <br/><br/>
            {studentInfo.phoneNumber}
            <br/><br/>
            {studentInfo.homeAddress}
            <br/><br/>

        </div>

    );

}

export default StudentInfo;