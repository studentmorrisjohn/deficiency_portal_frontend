import { useState, useEffect } from "react";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import { useNavigate } from "react-router-dom";
import { fetchGenerateReport } from "../../functions/employee";

function StudentsWithDeficiencySearch({searchStudents}) {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const navigate = useNavigate();

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


    function donwloadReport() {
        fetchGenerateReport(activeDeficiencyName.name);
    }


    return ( <div className="addStudentSearch">
    <span className="addStudentSearch_subtext">Enter:</span>
    <input placeholder="Student Number" name="student_id" className="standard_textinput" onChange={onChange}></input>
    <span className="addStudentSearch_subtext">Enter:</span>
    <input placeholder="Name" name="student_name" className="standard_textinput" onChange={onChange}></input>
    <button className="blue_button" onClick={search}>Search</button>
    <button className="red_button" onClick={() => {navigate("/AddStudent")}} >Add New Student</button>
    <button className="green_button" onClick={donwloadReport}>Generate Report</button>
    
</div> );
}

export default StudentsWithDeficiencySearch;