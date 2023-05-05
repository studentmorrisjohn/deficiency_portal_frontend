import EmployeeNav from "./EmployeeNav";
import React, { useState } from 'react';
import { fetchSubmitStudentList } from "../../functions/employee";
import UploadedTable from "./UploadedTable";
import useUploadListStore from "../../hooks/useUploadListStore";
import AlertModal from '../Modals/AlertModal';
import useAlertModalStore from "../../hooks/useAlertModalStore";

const uploadLogo = new URL("../images/file.png", import.meta.url)

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

                    <div className='inputFileDiv' onClick={() => document.querySelector(".input-field").click()}>
                        <form className="formUpdate" onSubmit={handleSubmit}>
                            <input type="file" onChange={handleFileChange} className="input-field" hidden/>
                            <img src={uploadLogo} className="uploadLogo" />
                            <span>Click here to browse a file</span>
                            <button className="uploadButton" type="submit">Click here to Upload</button>
                        </form>
                        

                    </div>

                    <div className="upload_table">
                        <UploadedTable />
                    </div>
                </div>
            </div>
        </div>
        
        
    </> );
}

export default InsertUsers;