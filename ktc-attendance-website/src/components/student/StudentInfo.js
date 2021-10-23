import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import {useHistory} from "react-router";

import classes from "./StudentInfo.module.css";

function StudentInfo(props) {

    //TODO: Add payment checker feature. Add notes. FIX EDITING!



    const id = props.id;

    const [studentInfo, setStudentInfo] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const studentNameInputRef = useRef();
    const yearGroupInputRef = useRef();
    const currentSchoolInputRef = useRef();
    const parentOrGuardianInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const homeAddressInputRef = useRef();

    const history = useHistory();

    useEffect(() => {
        
        fetch(
            "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students.json"
        )
        .then(response => response.json())
        .then(data => {
            Object.keys(data).filter(element => {
                if (data[element].studentName.toLowerCase() === id.toLowerCase()) {
                    setStudentInfo(data[element]);
                    console.log(id);
                }
                return data[element];
            })
        })
        return id;
    }, [id]);
    

    function setEditingOn() {

        setIsEditing(true);
        
    }

    function setEditingOff() {
        
        const newStudentName = studentNameInputRef.current.value;
        const newYearGroup = yearGroupInputRef.current.value;
        const newCurrentSchool = currentSchoolInputRef.current.value;
        const newParentOrGuardian = parentOrGuardianInputRef.current.value;
        const newPhoneNumber = phoneNumberInputRef.current.value;
        const newHomeAddress = homeAddressInputRef.current.value;

        const studentData = {
            studentName: newStudentName,
            yearGroup: newYearGroup,
            currentSchool: newCurrentSchool,
            parentOrGuardian: newParentOrGuardian,
            phoneNumber: newPhoneNumber,
            homeAddress: newHomeAddress
        };

        fetch(
            "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students/"+studentInfo.studentName+".json",
            {
                method: "DELETE",
                body: JSON.stringify(studentData),
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        .then(() => {
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
            .then(response => response.json())
            .then(data => {
                Object.keys(data).filter(element => {
                    setStudentInfo(studentData);
                    return data[element];
                })
                    
            });

            history.replace("/student_info/"+studentData.studentName);
        })
        
        setIsEditing(false);
    }
    
    return (

        <div className={classes.info_box}>

            <Link 
            to="/"
            className={classes.main_page_button}>Search Student</Link> 

            <br/><br/>

            <div className={classes.info}>
            
                <div className={classes.label}>Name:
                    {
                    isEditing === false ? 
                    <span className={classes.textfield}>{studentInfo.studentName}</span> 
                    :
                    <input 
                        type="text" 
                        id="studentName"
                        className={classes.textfield} 
                        required
                        defaultValue={studentInfo.studentName}
                        ref={studentNameInputRef}
                    />
                    }
                </div>
                <br/>

                <div className={classes.label}>Year Group:
                    {
                    isEditing === false ? 
                    <span className={classes.textfield}>{studentInfo.yearGroup}</span> 
                    :
                    <input 
                        type="text" 
                        id="studentName"
                        className={classes.textfield} 
                        required
                        defaultValue={studentInfo.yearGroup}
                        ref={yearGroupInputRef}
                    />
                    }
                </div>
                <br/>

                <div className={classes.label}>Current School:
                    {
                    isEditing === false ? 
                    <span className={classes.textfield}>{studentInfo.currentSchool}</span> 
                    :
                    <input 
                        type="text" 
                        id="studentName"
                        className={classes.textfield} 
                        required
                        defaultValue={studentInfo.currentSchool}
                        ref={currentSchoolInputRef}
                    />
                    }
                </div>
                <br/>

                <div className={classes.label}>Parent/Guardian:
                    {
                    isEditing === false ? 
                    <span className={classes.textfield}>{studentInfo.parentOrGuardian}</span> 
                    :
                    <input 
                        type="text" 
                        id="studentName"
                        className={classes.textfield} 
                        required
                        defaultValue={studentInfo.parentOrGuardian}
                        ref={parentOrGuardianInputRef}
                    />
                    }
                </div>
                <br/>

                <div className={classes.label}>Phone Number:
                    {
                    isEditing === false ? 
                    <span className={classes.textfield}>{studentInfo.phoneNumber}</span> 
                    :
                    <input 
                        type="text" 
                        id="studentName"
                        className={classes.textfield} 
                        required
                        defaultValue={studentInfo.phoneNumber}
                        ref={phoneNumberInputRef}
                    />
                    }
                </div>
                <br/>

                <div className={classes.label}>Home Address:
                    {
                    isEditing === false ? 
                    <span className={classes.textfield}>{studentInfo.homeAddress}</span> 
                    :
                    <input 
                        type="text" 
                        id="studentName"
                        className={classes.textfield} 
                        required
                        defaultValue={studentInfo.homeAddress}
                        ref={homeAddressInputRef}
                    />
                    }
                </div>
                <br/><br/>

                <div className={classes.label}>Notes:</div>
                <br/>
                <div className={classes.textfield}>Notes here</div>

            </div>

            {
            isEditing === false ? <button className={classes.editOnOrOff} onClick={() => setEditingOn()}>Edit</button>
            : 
            <button className={classes.editOnOrOff} onClick={() => setEditingOff()}>Save</button>
            }

        </div>

    );

}

export default StudentInfo;