import { useState, useEffect } from "react";
import { fetchStudentsWithDeficiencyList } from "../../functions/employee";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import StudentWithDeficiencyListRow from "./StudentWithDeficiencyListRow";
import { useNavigate } from "react-router-dom";

function StudentsWithDeficiencySearch() {
    const studentsWithDeficiencyList = useStudentWithDeficiencyListStore((state) => state.studentsWithDeficiencyList);
    const setStudentsWithDeficiencyList = useStudentWithDeficiencyListStore((state) => state.setStudentsWithDeficiencyList);
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        student_id: "",
        student_name: ""
    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    async function getStudentsWithDeficiency(student_id, student_name) {
        const response = await fetchStudentsWithDeficiencyList(activeDeficiencyName.name, student_id, student_name);
        if (response.warning) {
            setStudentsWithDeficiencyList(
            <tr>
                <td>
                    There are no students with this deficiency yet.
                </td>
            </tr>
            );
        } else {
            const studentList = response.map((studentWithDeficiency) => 
                <StudentWithDeficiencyListRow studentWithDeficiency={studentWithDeficiency} />
            );
            setStudentsWithDeficiencyList(studentList);
        }
    }

    useEffect(() => {
        getStudentsWithDeficiency("", "");
    }, []);


    useEffect(() => {
        if (formData.student_id === "" && formData.student_name === "") {
            getStudentsWithDeficiency("", "");
        }
        
    }, [formData]);


    function searchStudents() {
        getStudentsWithDeficiency(formData.student_id, formData.student_name);
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