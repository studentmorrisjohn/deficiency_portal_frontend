import {create} from 'zustand';

const useDeficiencyModalStore = create((set) => ({
  deficiencyModal: false,
  activeDeficiencyId: 0,
  openDeficiencyModal: () => set((state) => ({ deficiencyModal: true })),
  closeDeficiencyModal: () => set((state) => ({ deficiencyModal: false })),
  setactiveDeficiencyId: (id) => set((state) => ({ activeDeficiencyId: id }))
}));
  
export default useDeficiencyModalStore;