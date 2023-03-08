import { useState, useEffect } from "react";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import { useNavigate } from "react-router-dom";

function StudentsWithDeficiencySearch() {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const fetchStudentsWithDeficiency = useStudentWithDeficiencyListStore((state) => state.fetchStudentsWithDeficiency);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        student_id: "",
        student_name: ""
    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    useEffect(() => {
        fetchStudentsWithDeficiency(activeDeficiencyName.name, "", "");
        
    }, []);


    useEffect(() => {
        if (formData.student_id === "" && formData.student_name === "") {
            fetchStudentsWithDeficiency(activeDeficiencyName.name, "", "");
        }
        
    }, [formData]);


    function searchStudents() {
        fetchStudentsWithDeficiency(activeDeficiencyName.name, formData.student_id, formData.student_name);
    }

    return ( <div className="container19">
    <span className="home-text20">Enter Keyword:</span>
    <input placeholder="Student Number" name="student_id" onChange={onChange}></input>
    <span className="home-text20">Enter Keyword:</span>
    <input placeholder="Name" name="student_name" onChange={onChange}></input>
    <button className="home-button6" onClick={searchStudents}>Search</button>
    <button className="home-button7" onClick={() => {navigate("/AddStudent")}}>Add New Student</button>
</div> );
}

export default StudentsWithDeficiencySearch;