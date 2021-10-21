import {useParams} from "react-router-dom";

function StudentInfo() {

    //TODO: Filter out database with id. Add payment checker feature.

    const {id} = useParams();

    return (

        <div className="btn-textfield">

            {id}

        </div>

    );

}

export default StudentInfo;