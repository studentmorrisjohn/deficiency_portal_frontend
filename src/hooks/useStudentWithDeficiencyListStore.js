import {create} from 'zustand';
import StudentWithDeficiencyListRow from '../components/Employee/StudentWithDeficiencyListRow';
import { fetchStudentsWithDeficiencyList } from '../functions/employee';

const useStudentWithDeficiencyListStore = create((set) => ({
  studentsWithDeficiencyList: [],
  setStudentsWithDeficiencyList: (_studentsWithDeficiencyList) => set((state) => ({ studentsWithDeficiencyList: _studentsWithDeficiencyList })),
  fetchStudentsWithDeficiency: async(deficiencyName, student_id, student_name) => {
    const response = await fetchStudentsWithDeficiencyList(deficiencyName, student_id, student_name);
    if (response.warning) {
      set(
      {studentsWithDeficiencyList: <tr>
          <td>
              There are no students with this deficiency yet.
          </td>
      </tr>}
      );
  } else {
      const studentList = response.map((studentWithDeficiency) => 
          <StudentWithDeficiencyListRow studentWithDeficiency={studentWithDeficiency} />
      );
      set({studentsWithDeficiencyList: studentList});
  }
  }
}));
  
export default useStudentWithDeficiencyListStore;