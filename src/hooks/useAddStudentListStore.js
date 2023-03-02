import {create} from 'zustand';

const useAddStudentListStore = create((set) => ({
  addStudentList: [],
  setAddStudentList: (_addStudentList) => set((state) => ({ addStudentList: _addStudentList }))
}));
  
export default useAddStudentListStore;