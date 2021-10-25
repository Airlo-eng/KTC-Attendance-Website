import {Link} from "react-router-dom";

import classes from "./ResetButton.module.css";

function ResetButton() {

    return (

        <Link to="/reset" className={classes.resetButton}>
           Reset All Payments?
        </Link>

    );
    
}

export default ResetButton;