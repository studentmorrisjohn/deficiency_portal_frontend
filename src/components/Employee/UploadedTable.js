import React, {useState, useEffect } from "react"

import { fetchUploadedTaskList } from "../../functions/employee";

const UploadedTable = () => {
    const [uploadedList, setuploadedList] = useState([]);

    async function getUploadedList() {
        const response = await fetchUploadedTaskList();

        if (response.affiliations === "none") {
            setuploadedList("You don't have any affiliations");
        }
        // } else {
        //     const affiliationList = response.map((affiliation) => 
        //         <AffiliationTableRow 
        //         affiliation={affiliation} getAffiliationList={getAffiliationList}
        //         />
        //     );
        //     setAffiliationList(affiliationList);
        // }
    }

    useEffect(() => {
        getUploadedList();
    }, []);

    return (
        <div className="affiliation_table">
            <table>
                <thead>
                    <tr>
                        <th className="th_bl">
                            Uploaded File Name
                        </th>
                        <th className="th_bl">
                            Status
                        </th>
                        <th className="th_bl">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {uploadedList}                
                </tbody>
            </table>
        </div>
    )
}

export default UploadedTable;