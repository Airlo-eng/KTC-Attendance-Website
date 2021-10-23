import { Link } from "react-router-dom";

import classes from "./SearchResults.module.css";

function SearchResults(props) {

    var results = props.results;

    return (

        <div className={classes.searchBox}>

            {results.map((element, index) => (
                <Link className={classes.SearchResults} key={index} to={"/student_info/"+element}>
                    {element}
                    <br/>
                </Link>
            ))}

        </div>

    );

}

export default SearchResults;