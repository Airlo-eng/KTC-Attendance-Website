import classes from "./SearchBar.module.css";
import SearchIcon from "@material-ui/icons/Search";

import {useState} from "react";

import SearchResults from "./SearchResults";

function SearchBar() {
    
    const [result, setResult] = useState([]);
    const [queryString, setQueryString] = useState("");

    function searchHandler() {
        fetch(
            "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students.json"
        )
        .then(response => response.json())
        .then(data => {
        if (queryString === "") {
          //setResult(
            //Object.keys(data).map((element) => data[element].studentName)
          //);
        } 
        else {
          setResult(
            Object.keys(data).filter((element) => {
                return data[element].studentName.toLowerCase().includes(queryString.toLowerCase());
            }).map((filteredElement) => data[filteredElement].studentName)
          );
        }
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

                <button className={classes.search_icon} onClick={searchHandler(queryString)}>
                    <SearchIcon />
                </button>

            </div>

            <div>

                <SearchResults results={result} />

            </div>

        </div>

    );

}

export default SearchBar;