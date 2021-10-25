import {Link} from "react-router-dom";

import SearchBar from "../components/search/SearchBar";
import ResetButton from "../components/reset/ResetButton";

function MainPage() {
  
    return (
  
        <div>

            <Link 
            to="/register_student"
            id="page-btn" 
            className="btn-textfield">Register Student</Link>
  
            <SearchBar />

            <ResetButton />
  
      </div>
  
    );

}

export default MainPage;