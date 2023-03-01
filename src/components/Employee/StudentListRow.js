function StudentListRow({studentWithDeficiency}) {
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
        <td>
            {studentWithDeficiency.status}
        </td>
        <td>
            <button>V</button>
            <button>E</button>
            <button>X</button>
        </td>
    </tr> );
}

export default StudentListRow;