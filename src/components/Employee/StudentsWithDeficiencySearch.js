import { useState, useEffect } from "react";
import { fetchStudentsWithDeficiencyList } from "../../functions/employee";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import StudentWithDeficiencyListRow from "./StudentWithDeficiencyListRow";

function StudentsWithDeficiencySearch() {
    const studentsWithDeficiencyList = useStudentWithDeficiencyListStore((state) => state.studentsWithDeficiencyList);
    const setStudentsWithDeficiencyList = useStudentWithDeficiencyListStore((state) => state.setStudentsWithDeficiencyList);
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);

    async function getStudentsWithDeficiency() {
        const response = await fetchStudentsWithDeficiencyList(activeDeficiencyName.name);
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
            console.log(response);
        }
    }

    useEffect(() => {
        getStudentsWithDeficiency();
    }, []);


    return ( <div className="container19">
    <span className="home-text20">Enter Keyword:</span>
    <input placeholder="Student Number"></input>
    <span className="home-text20">Enter Keyword:</span>
    <input placeholder="Name"></input>
    <button className="home-button6">Search</button>
    <button className="home-button7">Add New Student</button>
</div> );
}

export default StudentsWithDeficiencySearch;