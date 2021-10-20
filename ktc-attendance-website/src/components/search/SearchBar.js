import classes from "./SearchBar.module.css";
import SearchIcon from "@material-ui/icons/Search";

import {useState} from "react";

import SearchResults from "./SearchResults";

function SearchBar() {

    //TODO: DONE (Gain access to firebase database and get info for search bar to display student name properties) with results appear under search bar. Add page to view specific student's details.

    const [result, setResult] = useState(["e", "o", "i", "u", "u"]);
    const [queryString, setQueryString] = useState("");

    function searchHandler() {
        fetch(
            "https://ktc-attendance-app-default-rtdb.europe-west1.firebasedatabase.app/students.json"
        )
        .then(response => response.json())
        .then(data => {
        if (queryString === "") {
          setResult(
            Object.keys(data).map((element) => data[element].studentName)
          );
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

            <div className={classes.dataResult}>
                Result:
                <br/><br/>
                <span dangerouslySetInnerHTML={{__html: result.join('<br />')}} />
                <br/><br/><br/><br/>
                Query String:
                <br/><br/>
                {queryString}
                <br/><br/>

                <SearchResults />

            </div>

        </div>

    );

}

export default SearchBar;