import {useParams} from "react-router-dom";

function StudentInfo() {

    const {id} = useParams();

    return (

        <div className="btn-textfield">

            {id}

        </div>

    );

}

export default StudentInfo;