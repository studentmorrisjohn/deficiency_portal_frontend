import React, {useState, useEffect } from "react"
import { fetchMailList } from "../../functions/employee";


function UploadedTableRow( {uploadedTask} ) {

    const deleteIcon = new URL("../images/DeleteIcon.png", import.meta.url)

    async function downloadMailList() {
        await fetchMailList(uploadedTask.csv_filename);
    }

    function getStatus() {
        if (uploadedTask.failed) {
            return "Failed";
        }

        if (uploadedTask.done_uploading) {
            return "Done";
        }

        return "Uploading";
    }

    return ( 
        <tr>
            <td>
                {uploadedTask.file_name}
            </td>
            <td>
                {getStatus()}
            </td>
            <td>
                
                {uploadedTask.done_uploading ? 
                <button className="green_button" onClick={downloadMailList}>
                    Download Email List
                </button> : ""}
            </td>
        </tr> 
    );
}

export default UploadedTableRow;