import { useState, useEffect } from "react";
import { fetchAllStudentsList, fetchStudentsWithDeficiencyList } from "../../functions/employee";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import StudentWithDeficiencyListRow from "./StudentWithDeficiencyListRow";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import AddStudentRow from "./AddStudentRow";

function AddStudentSearch() {
    const setStudentsWithDeficiencyList = useStudentWithDeficiencyListStore((state) => state.setStudentsWithDeficiencyList);
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const setAddStudentList = useAddStudentListStore((state) => state.setAddStudentList);

    const [formData, setFormData] = useState({
        student_id: "",
        student_name: ""
    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    async function getAllStudents(student_id, student_name) {
        const response = await fetchAllStudentsList(activeDeficiencyName.name, student_id, student_name);
        if (response.warning) {
            setAddStudentList(
            <tr>
                <td>
                    Something Went Wrong.
                </td>
            </tr>
            );
        } else {
            const studentList = response.map((student) => 
                <AddStudentRow student={student} />
            );
            setAddStudentList(studentList);
        }
    }

    useEffect(() => {
        getAllStudents("", "");
    }, []);


    useEffect(() => {
        if (formData.student_id === "" && formData.student_name === "") {
            getAllStudents("", "");
        }
        
    }, [formData]);


    function searchStudents() {
        getAllStudents(formData.student_id, formData.student_name);
    }

    return ( <div className="addStudentSearch">
    <span className="addStudentSearch_subtext">Enter Keyword:</span>
    <input placeholder="Student Number" className="standard_textinput" name="student_id" onChange={onChange}></input>
    <span className="addStudentSearch_subtext">Enter Keyword:</span>
    <input placeholder="Name" className="standard_textinput" name="student_name" onChange={onChange}></input>
    <button className="blue_button" onClick={searchStudents}>Search</button>
</div> );
}

export default AddStudentSearch;