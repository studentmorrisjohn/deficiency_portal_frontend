import {create} from 'zustand';

const useAuthenticatedStore = create((set) => ({
  isAuthenticated: false,
  authenticate: () => set((state) => ({ isAuthenticated: true })),
}))
  
export default useAuthenticatedStore;