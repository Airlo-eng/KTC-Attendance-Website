function StudentInfo() {

    const pathName = this.location.pathname;

    return (

        <div className="btn-textfield">

            {pathName}
            E

        </div>

    );

}

export default StudentInfo;