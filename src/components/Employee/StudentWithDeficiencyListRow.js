import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"
import {fetchDeleteDeficiency} from "../../functions/employee"
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";

function StudentWithDeficiencyListRow({studentWithDeficiency}) {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const openModal = useDeficiencyModalStore((state) => state.openDeficiencyModal);
    const openModalAdmin = useDeficiencyModalStore((state) => state.openDeficiencyModalAdmin);
    const setactiveDeficiencyId = useDeficiencyModalStore((state) => state.setactiveDeficiencyId);
    const fetchStudentsWithDeficiency = useStudentWithDeficiencyListStore((state) => state.fetchStudentsWithDeficiency);

    async function deleteDeficiency() {
        const response = await fetchDeleteDeficiency(studentWithDeficiency.id);
        fetchStudentsWithDeficiency(activeDeficiencyName.name, "", "");
    }

    return ( <tr>
        <td>
            {studentWithDeficiency.student.student_id}
        </td>
        <td>
            {studentWithDeficiency.student.name}
        </td>
        <td>
            {/* {studentWithDeficiency.student.affiliations ? studentWithDeficiency.student.affiliations.organization : ""} */}
        </td>
        {activeDeficiencyName.category === "Finance" ? <td>
            {studentWithDeficiency.balance}
        </td> : ""}
        <td>
            {studentWithDeficiency.status}
        </td>
        <td>
            <button onClick={() => {
            openModal();
            setactiveDeficiencyId(studentWithDeficiency.id);
        }}>V</button>
            <button onClick={() => {
            openModalAdmin();
            setactiveDeficiencyId(studentWithDeficiency.id);
        }}>E</button>
            <button onClick={deleteDeficiency}>X</button>
        </td>
        
    </tr> );
}

export default StudentWithDeficiencyListRow;