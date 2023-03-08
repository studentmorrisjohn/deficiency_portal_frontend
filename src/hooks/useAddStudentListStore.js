import {create} from 'zustand';
import AddStudentRow from '../components/Employee/AddStudentRow';
import { fetchAllStudentsList } from '../functions/employee';

const useAddStudentListStore = create((set) => ({
  addStudentList: [],
  setAddStudentList: (_addStudentList) => set((state) => ({ addStudentList: _addStudentList })),
  fetchAllStudents: async(deficiencyName, student_id, student_name) => {
    const response = await fetchAllStudentsList(deficiencyName, student_id, student_name);

    if (response.warning) {
      set( {
        addStudentList: <tr>
                          <td>
                              Something Went Wrong.
                          </td>
                      </tr>
      });
  } else {
      const studentList = response.map((student) => 
          <AddStudentRow student={student} />
      );
      set( {
        addStudentList: studentList});

  }
  }
}));
  
export default useAddStudentListStore;