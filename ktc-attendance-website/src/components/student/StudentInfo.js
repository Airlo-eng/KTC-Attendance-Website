import {useState, useRef} from "react";
import {Link} from "react-router-dom";

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
    
    fetch(
        "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students.json"
    )
    .then(response => response.json())
    .then(data => {
        Object.keys(data).filter(element => {
            if (data[element].studentName.toLowerCase() === id.toLowerCase()) {
                setStudentInfo(data[element]);
            }
            return data[element];
        })
            
    })

    function setEditingOn() {

        setIsEditing(true);

        
    }

    function setEditingOff() {
        
        const enteredStudentName = studentNameInputRef.current.value;
        const enteredYearGroup = yearGroupInputRef.current.value;
        const enteredCurrentSchool = currentSchoolInputRef.current.value;
        const enteredParentOrGuardian = parentOrGuardianInputRef.current.value;
        const enteredPhoneNumber = phoneNumberInputRef.current.value;
        const enteredHomeAddress = homeAddressInputRef.current.value;

        const studentData = {
            studentName: enteredStudentName,
            yearGroup: enteredYearGroup,
            currentSchool: enteredCurrentSchool,
            parentOrGuardian: enteredParentOrGuardian,
            phoneNumber: enteredPhoneNumber,
            homeAddress: enteredHomeAddress
        };

        fetch(
            "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students.json"
        )
        .then(response => response.json())
        .then(data => {
            Object.keys(data).filter(element => {
                if (data[element].studentName.toLowerCase() === id.toLowerCase()) {
                    data[element] = studentData;
                    console.log(data[element]);
                }
                return data[element];
            })
                
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