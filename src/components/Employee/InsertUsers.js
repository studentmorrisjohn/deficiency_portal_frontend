import EmployeeNav from "./EmployeeNav";
import React, { useState } from 'react';
import { fetchSubmitStudentList } from "../../functions/employee";
import UploadedTable from "./UploadedTable";
import useUploadListStore from "../../hooks/useUploadListStore";
import AlertModal from '../Modals/AlertModal';
import useAlertModalStore from "../../hooks/useAlertModalStore";

function InsertUsers() {
    const [file, setFile] = useState(null);
    const fetchAllUploadedTasks = useUploadListStore((state) => state.fetchAllUploadedTasks);

    const alertIsOpen = useAlertModalStore((state) => state.isOpen);
    const openAlert = useAlertModalStore((state) => state.openAlert);

    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            const data = await fetchSubmitStudentList(file);
            console.log(data);
            openAlert("Success", "Success", "Your file is being uploaded");
        } catch(error) {
            console.error(error);
            openAlert("Error", "Error", "Something went wrong");
        }

        fetchAllUploadedTasks();
    }
        

    return ( 
    <>
        {alertIsOpen && <AlertModal /> }
        <div className="screenLayout">
            <EmployeeNav />
            <div className="title_contentDiv">
                <span className="page-title"> Insert Student Profiles </span>
                <div className="outerDiv">

                    <div className='dashboardDiv'>
                        <form onSubmit={handleSubmit}>
                            <input type="file" onChange={handleFileChange} />
                            <button type="submit">Upload</button>
                        </form>

                    </div>


                </div>
            </div>
        </div>
        <div className="screenLayout">
            <UploadedTable />
        </div>
        
    </> );
}

export default InsertUsers;