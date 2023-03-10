import { fetchAddStudentToDeficiency } from "../../functions/employee";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import useSelectedStudentStore from "../../hooks/useSelectedStudentStore";
import useFinanceDeficiencyModal from "../../hooks/useFinanceDeficiencyModalStore";

function AddStudentRow({student}) {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const fetchAllStudents = useAddStudentListStore((state) => state.fetchAllStudents);
    const setSelectedStudentId = useSelectedStudentStore((state) => state.setSelectedStudentId);
    const openFinanceDeficiencyModal = useFinanceDeficiencyModal((state) => state.openFinanceDeficiencyModal);

    async function addStudent() {
        if (activeDeficiencyName.category === "Document") {
            const response = await fetchAddStudentToDeficiency(activeDeficiencyName.name, student.student_id, activeDeficiencyName.category, null);
            fetchAllStudents(activeDeficiencyName.name, "", "");
        } else {
            setSelectedStudentId(student.student_id);
            openFinanceDeficiencyModal();
        }
    }

    return ( <tr>
        <td>
            {student.student_id}
        </td>
        <td>
            {student.name}
        </td>
        
        <td style={{maxWidth:"20rem", overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>
            {student.affiliations ? student.affiliations.map((affiliation =>
                <span>{affiliation.organization.name}, </span>

                )) : ""}
        </td>
        <td>
            <button onClick={addStudent}>V</button>
        </td>
        
    </tr> );
}

export default AddStudentRow;