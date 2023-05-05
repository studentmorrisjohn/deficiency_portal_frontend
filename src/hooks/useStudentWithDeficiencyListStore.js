import {create} from 'zustand';
import StudentWithDeficiencyListRow from '../components/Employee/StudentWithDeficiencyListRow';
import { fetchStudentsWithDeficiencyList } from '../functions/employee';

const useStudentWithDeficiencyListStore = create((set) => ({
  studentsWithDeficiencyList: [],
  count: 0,
  pages: 0,
  setStudentsWithDeficiencyList: (_studentsWithDeficiencyList) => set((state) => ({ studentsWithDeficiencyList: _studentsWithDeficiencyList })),
  fetchStudentsWithDeficiency: async(deficiencyName, student_id, student_name, page) => {
    const response = await fetchStudentsWithDeficiencyList(deficiencyName, student_id, student_name, page);
    
    if (response.warning) {
      set({studentsWithDeficiencyList: []});
  } else {
      set({studentsWithDeficiencyList: response.results, count: response.count, pages: Math.ceil(response.count / 10)});
  }
  }
}));
  
export default useStudentWithDeficiencyListStore;