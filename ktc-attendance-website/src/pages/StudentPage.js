import {useParams} from "react-router-dom";

import StudentInfo from "../components/student/StudentInfo";

function StudentPage() {
    
    const {id} = useParams();
    
    return (

        <div>

            <StudentInfo id={id} />

        </div>

    );

}

export default StudentPage;