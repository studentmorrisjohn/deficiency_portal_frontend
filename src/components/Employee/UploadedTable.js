import React, {useState, useEffect } from "react"

import { fetchUploadedTaskList } from "../../functions/employee";

import useUploadListStore from "../../hooks/useUploadListStore";

const UploadedTable = () => {
    const INTERVAL_DELAY = 5000;

    const uploadedList = useUploadListStore((state) => state.uploadedList);
    const fetchAllUploadedTasks = useUploadListStore((state) => state.fetchAllUploadedTasks);

    useEffect(() => {
        fetchAllUploadedTasks();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(fetchAllUploadedTasks, INTERVAL_DELAY);

        return () => clearInterval(intervalId);
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