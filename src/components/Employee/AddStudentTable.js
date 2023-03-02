import useAddStudentListStore from "../../hooks/useAddStudentListStore";

function AddStudentTable() {
    const addStudentList = useAddStudentListStore((state) => state.addStudentList);

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
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {addStudentList}            
        </tbody>
    </table> );
}

export default AddStudentTable;