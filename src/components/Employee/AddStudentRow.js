import { fetchAddStudentToDeficiency } from "../../functions/employee";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";

function AddStudentRow({student}) {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const fetchAllStudents = useAddStudentListStore((state) => state.fetchAllStudents);

    async function addStudent() {
        if (activeDeficiencyName.category === "Document") {
            const response = await fetchAddStudentToDeficiency(activeDeficiencyName.name, student.student_id, activeDeficiencyName.category, null);
            fetchAllStudents(activeDeficiencyName.name, "", "");
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