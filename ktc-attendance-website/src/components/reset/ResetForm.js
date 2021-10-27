import {Link} from "react-router-dom";
import {useState, useRef} from "react";

import classes from "./ResetForm.module.css";

function ResetForm() {

    const [method, setMethod] = useState("");
    const [confirmReset, setConfirmReset] = useState(false);
    const yearGroupInputRef = useRef();

    function resetPaymentsHandler(event) {

        event.preventDefault();

        if (method === "all") {
            fetch(
                "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students.json"
            )
            .then(response => response.json())
            .then(data => {
                Object.keys(data).forEach(element => {
                    if (data[element].paid.toLowerCase().includes("yes")) {
                        fetch(
                            "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students/"+data[element].studentName+".json",
                            {
                                method: "PATCH",
                                body: JSON.stringify({
                                    paid: "no"
                                }),
                                headers: {
                                    "Content-Type": "application/json",
                                }
                            }
                        )
                    }
                })
            }).catch(error => console.log(error))
        }

        else if (method === "year") {
            fetch(
                "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students.json"
            )
            .then(response => response.json())
            .then(data => {
                Object.keys(data).forEach(element => {
                    if (isNaN(yearGroupInputRef.current.value)) {
                        console.log("Entered Year Group is not a valid Year Group");
                    }
                    else if (data[element].yearGroup === yearGroupInputRef.current.value && data[element].paid.toLowerCase().includes("yes")) {
                        fetch(
                             "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students/"+data[element].studentName+".json",
                             {
                                 method: "PATCH",
                                 body: JSON.stringify({
                                     paid: "no"
                                 }),
                                 headers: {
                                     "Content-Type": "application/json",
                                 }
                             }
                         )
                    }
                })
            }).catch(error => console.log(error))
        }

    }

    return (

        <div>

            <Link 
            to="/"
            className={classes.main_page_button}>Search Student</Link> 

            <div className={classes.resetArea}>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>

                    <button className="btn-textfield" onClick={event => setMethod("year")}>
                        By Year Group?
                    </button>
                    <br/><br/>
                    <br/><br/>
                    <button className="btn-textfield" onClick={event => setMethod("all")}>
                        Reset All?
                    </button>
                    <br/><br/>
                    <br/><br/>

                    <form>

                        {
                            method === "all"
                            ?
                            <div className={classes.methodIdentifier}>Method selected is all</div>
                            :
                            <div></div>
                        }
                        
                        {
                            method === "year"
                            ?
                            <div>
                                <div className={classes.methodIdentifier}>Method selected is by year group. <br/><br/> Type in year group: </div>
                                <br/><br/>
                                <input 
                                className={classes.yearGroup} 
                                type="text" 
                                placeholder="Type in number!"
                                ref={yearGroupInputRef}/>
                            </div>
                            :
                            <div></div>
                        }

                        <br/><br/>
                        <br/><br/>
                        {
                            confirmReset === false
                            ?
                            <button className="btn-textfield" onClick={event => {
                                event.preventDefault();
                                setConfirmReset(true);
                            }}>
                                Reset?
                            </button>
                            :
                            <button className="btn-textfield" onClick={resetPaymentsHandler}>
                                Confirm Reset?
                            </button>

                        }

                    </form>

            </div>
            

        </div>

    );

}

export default ResetForm;