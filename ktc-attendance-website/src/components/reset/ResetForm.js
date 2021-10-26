import {Link} from "react-router-dom";
import {useState, useRef} from "react";

import classes from "./ResetForm.module.css";

function ResetForm() {

    const [method, setMethod] = useState("");
    const yearGroupInputRef = useRef();

    function resetPaymentsHandler(event) {

        event.preventDefault();

        if (method === "all") {
            fetch(
                "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students"
            )
            .then(response => response.json())
            .then(data => {
                Object.keys(data).forEach(element => {
                    if (data[element].paid.toLowerCase() === "yes") {
                        //TODO: Get the student info then delete the student and add a new student with same metadata but paid metadata not as yes.
                    }
                })
            })
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

                    {
                        method !== ""
                        ?
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
                        <button className="btn-textfield" onSubmit={resetPaymentsHandler}>
                            Confirm Reset?
                        </button>

                    </form>
                        :
                        <div></div>
                    }

            </div>
            

        </div>

    );

}

export default ResetForm;