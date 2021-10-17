import {Link} from "react-router-dom";

function MainPage() {
  
    function studentSearchHandler() {
  
    }
  
    return (
  
        <div>

            <Link 
            to="/register_student"
            id="page-btn" 
            className="btn-textfield">Register Student</Link>
  
            <form onSubmit={studentSearchHandler}>
                <input
                    type="text"
                    id="search-bar"
                    className="btn-textfield"
                    placeholder="Search..." />
                <button id="search-btn" className="btn-textfield">Search</button>
            </form>
  
      </div>
  
    );

}

export default MainPage;