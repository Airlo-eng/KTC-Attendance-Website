import {Link} from "react-router-dom";
import {useRef} from "react";

import classes from "./RegisterForm.module.css";

function RegisterForm(props) {

    const studentNameInputRef = useRef();
    const yearGroupInputRef = useRef();
    const currentSchoolInputRef = useRef();
    const parentOrGuardianInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const homeAddressInputRef = useRef();
    const studentNotesInputRef = useRef();
    const paidOrUnpaidInputRef = useRef();

    function createStudentHandler(event) {

        event.preventDefault();

        const enteredStudentName = studentNameInputRef.current.value;
        const enteredYearGroup = yearGroupInputRef.current.value;
        const enteredCurrentSchool = currentSchoolInputRef.current.value;
        const enteredParentOrGuardian = parentOrGuardianInputRef.current.value;
        const enteredPhoneNumber = phoneNumberInputRef.current.value;
        const enteredHomeAddress = homeAddressInputRef.current.value;
        const enteredNotes = studentNotesInputRef.current.value;
        const paid = paidOrUnpaidInputRef.current.value;

        const studentData = {
            studentName: enteredStudentName,
            yearGroup: enteredYearGroup,
            currentSchool: enteredCurrentSchool,
            parentOrGuardian: enteredParentOrGuardian,
            phoneNumber: enteredPhoneNumber,
            homeAddress: enteredHomeAddress,
            studentNotes: enteredNotes,
            paid: paid
        };

        props.onAddStudent(studentData);

    }
        
    return (

        <div>
            <Link 
            to="/"
            className={classes.main_page_button}>Search Student</Link> 
            <div className={classes.register_box}>
                <br/><br/>
                <form onSubmit={createStudentHandler} className={classes.register_form}>
                    <div id="studentName">
                        <label htmlFor="studentName" className={classes.label}>Name:</label>
                        <br/>
                        <input 
                            type="text" 
                            id="studentName"
                            className={classes.textfield} 
                            placeholder="Student Name"
                            required
                            ref={studentNameInputRef}
                        />
                    </div>
                    <br/><br/>
                    <div id="studentYearGroup">
                        <label htmlFor="studentYearGroup" className={classes.label}>Year Group:</label>
                        <br/>
                        <input 
                            type="text" 
                            id="studentYearGroup" 
                            className={classes.textfield}
                            placeholder="Year Group"
                            required
                            ref={yearGroupInputRef}
                        />
                    </div>
                    <br/><br/>
                    <div id="studentCurrentSchool">
                        <label htmlFor="studentCurrentSchool" className={classes.label}>Current School :</label>
                        <br/>
                        <input 
                            type="text" 
                            id="studentCurrentSchool" 
                            className={classes.textfield} 
                            placeholder="Current School"
                            required
                            ref={currentSchoolInputRef}
                        />
                    </div>
                    <br/><br/>

                    <div id="studentParentOrGuardian">
                        <label htmlFor="studentParentOrGuardian" className={classes.label}>Parent/Guardian :</label>
                        <br/>
                        <input 
                            type="text" 
                            id="studentParentOrGuardian" 
                            className={classes.textfield}
                            placeholder="Parent/Guardian"
                            required
                            ref={parentOrGuardianInputRef}
                        />
                    </div>
                    <br/><br/>
                    <div id="studentPhoneNumber">
                        <label htmlFor="studentPhoneNumber" className={classes.label}>Phone Number</label>
                        <br/>
                        <input 
                            type="text" 
                            id="studentPhoneNumber" 
                            className={classes.textfield} 
                            placeholder="Phone Number"
                            required
                            ref={phoneNumberInputRef}
                        />
                    </div>
                    <br/><br/>
                    <div id="studentHomeAddress">
                        <label htmlFor="studentHomeAddress" className={classes.label}>Home Address: </label>
                        <br/>
                        <input 
                            type="text" 
                            id="studentHomeAddress" 
                            className={classes.textfield} 
                            placeholder="Home Address"
                            required
                            ref={homeAddressInputRef}
                        />
                    </div>
                    <br/><br/>
                    <div id="studentNotes">
                        <label htmlFor="studentNotes" className={classes.label}>Notes:</label>
                        <br/>
                        <input 
                            type="text" 
                            id="studentNotes" 
                            className={classes.textfield} 
                            placeholder="Notes Here"
                            required
                            ref={studentNotesInputRef}
                        />
                    </div>
                    <br/><br/>
                    <div id="paidOrUnpaid">
                        <label htmlFor="paidOrUnpaid">Paid:</label>
                        <br/>
                        <input 
                            type="text" 
                            id="paidOrUnpaid"
                            placeholder="Yes = paid. Anything else = Unpaid" 
                            className={classes.textfield} 
                            required
                            ref={paidOrUnpaidInputRef}
                        />
                    </div>

                    <br/><br/>
                    <button id="studentRegisterButton" className="btn-textfield">Register Student</button>
                    <br/>
                </form>
            </div>
        </div>

    );

}

export default RegisterForm;