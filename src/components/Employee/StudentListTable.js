import { useState, useEffect } from "react";
import { fetchStudentsWithDeficiencyList } from "../../functions/employee";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import StudentListRow from "./StudentListRow";

function StudentListTable() {
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
                <StudentListRow studentWithDeficiency={studentWithDeficiency} />
            );
            setStudentsWithDeficiencyList(studentList);
            console.log(response);
        }
    }

    useEffect(() => {
        getStudentsWithDeficiency();
    }, []);

    return ( <table>
        <thead>
            <tr>
                <th>
                    Student Number
                </th>
                <th>
                    Name
                </th>
                <th>
                    Affiliation
                </th>
                <th>
                    Status
                </th>
                <th>
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {studentsWithDeficiencyList}            
        </tbody>
    </table> );
}

export default StudentListTable;