import {create} from 'zustand';

const useStudentWithDeficiencyListStore = create((set) => ({
  studentsWithDeficiencyList: [],
  setStudentsWithDeficiencyList: (_studentsWithDeficiencyList) => set((state) => ({ studentsWithDeficiencyList: _studentsWithDeficiencyList }))
}));
  
export default useStudentWithDeficiencyListStore;