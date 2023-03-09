import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"
import {fetchDeleteDeficiency} from "../../functions/employee"
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useConfirmDeleteModalStore from "../../hooks/useConfirmDeleteModalStore";

function StudentWithDeficiencyListRow({studentWithDeficiency}) {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const openModal = useDeficiencyModalStore((state) => state.openDeficiencyModal);
    const openModalAdmin = useDeficiencyModalStore((state) => state.openDeficiencyModalAdmin);
    const openConfirmDeleteModal = useConfirmDeleteModalStore((state) => state.openDeleteModal);
    const setactiveDeficiencyId = useDeficiencyModalStore((state) => state.setactiveDeficiencyId);
    const fetchStudentsWithDeficiency = useStudentWithDeficiencyListStore((state) => state.fetchStudentsWithDeficiency);

    const viewicon = new URL("../images/ViewIcon.png",import.meta.url);
    const editicon = new URL("../images/EditIcon.png",import.meta.url);
    const deleteicon = new URL("../images/DeleteIcon.png",import.meta.url);

    async function deleteDeficiency() {
        openConfirmDeleteModal(studentWithDeficiency.id);
        // const response = await fetchDeleteDeficiency(studentWithDeficiency.id);
        // fetchStudentsWithDeficiency(activeDeficiencyName.name, "", "");
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
        <td className="iconGap"> 
            <button className="iconbutton" onClick={() => {
            openModal();
            setactiveDeficiencyId(studentWithDeficiency.id);
        }}><img src= {viewicon}/></button>
            <button className="iconbutton" onClick={() => {
            openModalAdmin();
            setactiveDeficiencyId(studentWithDeficiency.id);
        }}><img src= {editicon}/></button>
            <button className="iconbutton" onClick={deleteDeficiency}><img src= {deleteicon}/></button>
        </td>
        
    </tr> );
}

export default StudentWithDeficiencyListRow;