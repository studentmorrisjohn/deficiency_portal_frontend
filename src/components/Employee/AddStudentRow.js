import { fetchAddStudentToDeficiency } from "../../functions/employee";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import useSelectedStudentStore from "../../hooks/useSelectedStudentStore";

function AddStudentRow({student}) {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const fetchAllStudents = useAddStudentListStore((state) => state.fetchAllStudents);
    const setSelectedStudentId = useSelectedStudentStore((state) => state.setSelectedStudentId);

    async function addStudent() {
        if (activeDeficiencyName.category === "Document") {
            const response = await fetchAddStudentToDeficiency(activeDeficiencyName.name, student.student_id, activeDeficiencyName.category, null);
            fetchAllStudents(activeDeficiencyName.name, "", "");
        } else {
            setSelectedStudentId(student.student_id);
        }
    }

    return ( <tr>
        <td>
            {student.student_id}
        </td>
        <td>
            {student.name}
        </td>
        <td>
            {/* {student.affiliations ? studentWithDeficiency.student.affiliations.organization : ""} */}
        </td>
        <td>
            <button onClick={addStudent}>V</button>
        </td>
        
    </tr> );
}

export default AddStudentRow;