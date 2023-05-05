import {create} from 'zustand';
import AddStudentRow from '../components/Employee/AddStudentRow';
import { fetchAllStudentsList } from '../functions/employee';

const useAddStudentListStore = create((set) => ({
  addStudentList: [],
  count: 0,
  pages: 0,
  setAddStudentList: (_addStudentList) => set((state) => ({ addStudentList: _addStudentList })),
  fetchAllStudents: async(deficiencyName, student_id, student_name, page) => {
    try {
      const response = await fetchAllStudentsList(deficiencyName, student_id, student_name, page);

      if (response.warning) {
        set( {addStudentList: []});
      } 
      else {
        set(  {addStudentList: response.results, count: response.count, pages: Math.ceil(response.count / 10)});
      }
    } 
    catch (error) {
      throw error;
    }
    
  }
}));
  
export default useAddStudentListStore;