import { useState, useEffect } from "react";
import { fetchAllStudentsList, fetchStudentsWithDeficiencyList } from "../../functions/employee";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import StudentWithDeficiencyListRow from "./StudentWithDeficiencyListRow";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import AddStudentRow from "./AddStudentRow";

function AddStudentSearch({searchStudents}) {
    const [formData, setFormData] = useState({
        student_id: "",
        student_name: ""
    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    useEffect(() => {
        if (formData.student_id === "" && formData.student_name === "") {
            searchStudents("", "");
        }
        
    }, [formData]);


    function search() {
        searchStudents(formData.student_id, formData.student_name);
    }

    return ( <div className="addStudentSearch">
    <span className="addStudentSearch_subtext">Enter Keyword:</span>
    <input placeholder="Student Number" className="standard_textinput" name="student_id" onChange={onChange}></input>
    <span className="addStudentSearch_subtext">Enter Keyword:</span>
    <input placeholder="Name" className="standard_textinput" name="student_name" onChange={onChange}></input>
    <button className="blue_button" onClick={search}>Search</button>
</div> );
}

export default AddStudentSearch;