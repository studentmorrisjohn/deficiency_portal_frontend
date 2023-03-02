import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";

function StudentListTable() {
    const studentsWithDeficiencyList = useStudentWithDeficiencyListStore((state) => state.studentsWithDeficiencyList);
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);

    

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
                {activeDeficiencyName.category === "Finance" ? <th>
                    Balance
                </th> : ""}

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