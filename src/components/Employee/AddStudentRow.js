function AddStudentRow({student}) {
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
            <button>V</button>
        </td>
        
    </tr> );
}

export default AddStudentRow;