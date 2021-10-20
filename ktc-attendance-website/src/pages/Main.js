import {Link} from "react-router-dom";

import SearchBar from "../components/search/SearchBar";

function MainPage() {
  
    return (
  
        <div>

            <Link 
            to="/register_student"
            id="page-btn" 
            className="btn-textfield">Register Student</Link>
  
            <SearchBar />
  
      </div>
  
    );

}

export default MainPage;