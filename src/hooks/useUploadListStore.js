import {create} from 'zustand';
import {fetchUploadedTaskList } from '../functions/employee';
import UploadedTableRow from '../components/Employee/UploadedTableRow';


const useUploadListStore = create((set) => ({
  uploadedList: [],
  fetchAllUploadedTasks: async() => {
    const response = await fetchUploadedTaskList();
    

    if (response.error) {
      set( {uploadedList: []});
    } else {

        const uploadedResponse = response.map((uploadedTask) => 
            <UploadedTableRow 
            uploadedTask={uploadedTask}
            />
        );

        set( {uploadedList: uploadedResponse});

    }
  }
}));
  
export default useUploadListStore;