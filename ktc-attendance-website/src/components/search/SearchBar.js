import classes from "./SearchBar.module.css";
import SearchIcon from "@material-ui/icons/Search";

import {useState} from "react";

function SearchBar() {

    //TODO: DONE (Gain access to firebase database and get info for search bar) to display student name properties. Add page to view specific student's details.

    const [result, setResult] = useState(["e"]);
    const [queryString, setQueryString] = useState("");

    function searchHandler() {
        fetch(
            "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students.json"
        )
        .then(response => response.json())
        .then(data => {
            Object.keys(data).filter(element => {
                if (queryString === "") {
                    setResult(data[element].studentName);
                    //setResult(result.push(data[element].studentName));
                }
                else if (data[element].studentName.toLowerCase().includes(queryString.toLowerCase())) {
                    setResult(data[element].studentName);
                    //setResult(result.push(data[element].studentName));
                }
                //setResult(result.join("<br/>"));
                return data[element].studentName;
            })
        });

    }
    
    return (

        <div className={classes.search}>

            <div className={classes.search_inputs}>

                <input
                    type="text"
                    id="search-bar"
                    className={classes.search_bar}
                    placeholder="Search..."
                    onChange={event => setQueryString(event.target.value)}
                />

                <button className={classes.search_icon} onClick={searchHandler}>
                    <SearchIcon />
                </button>

            </div>

            <div className={classes.dataResult}>
                Result:
                <br/><br/>
                {result}
                <br/><br/><br/><br/>
                Query String:
                <br/><br/>
                {queryString}
                <br/><br/>
            </div>

        </div>

    );

}

export default SearchBar;