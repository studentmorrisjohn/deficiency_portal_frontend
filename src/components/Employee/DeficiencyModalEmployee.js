import React, { useState, useEffect } from "react"
import { fetchDeficiencyDetailsEmployee, fetchUpdateDeficiency } from "../../functions/employee";

import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";

const DeficiencyModalEmployee = () => {
    const closeModal = useDeficiencyModalStore((state) => state.closeDeficiencyModal);
    const activeDeficiencyId = useDeficiencyModalStore((state) => state.activeDeficiencyId);
    const adminMode = useDeficiencyModalStore((state) => state.adminMode);
    const fetchStudentsWithDeficiency = useStudentWithDeficiencyListStore((state) => state.fetchStudentsWithDeficiency);
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);

    const [deficiencyDetails, setDeficiencyDetails] = useState({
        id: 0,
        category: "",
        name: "",
        status: "",
        balance: 0,
        student_summary: {},
        added_by: "",
        processed_by: "",
        date_added: "",
        date_fulfilled: ""
    });

    async function getDeficiencyDetails() {
        const response = await fetchDeficiencyDetailsEmployee(activeDeficiencyId);
        setDeficiencyDetails(response);
    }

    async function updateDeficiency() {
        const response = await fetchUpdateDeficiency(activeDeficiencyId, deficiencyDetails.status === "Pending" ? true : false);
        getDeficiencyDetails();
        fetchStudentsWithDeficiency(activeDeficiencyName.name, "", "")
    }

    useEffect(() => {
        
        getDeficiencyDetails();

    }, []);


    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="modalContainer1">
                        <span className="modalText">Deficiency ID: {deficiencyDetails.deficiency_id}</span>
                    </div>
                    <div className="modalContainer2">
                        <div className="modalContainer3">
                            <span className="modalText1">Name: {deficiencyDetails.student_summary.name}</span>
                            <span className="modalText1">Deficiency: {deficiencyDetails.name}</span>
                            <span className="modalText1">Webmail: j@iskolarngbayan.pup.edu.ph</span>
                        </div>
                        <div className="modalContainer3">
                            <span className="modalText1"> Category: {deficiencyDetails.category}</span>
                            <span className="modalText1">Status: {deficiencyDetails.status}</span>
                            <span className="modalText1">Contact No.:09XXXXXXXXX</span>
                        </div>
                    </div>
                    
                    <div className="modalContainer2">
                        <div className="modalContainer4">
                            <span className="modalText1">Affiliation</span> 
                        </div>
                        <div className="modalContainer5">
                            {deficiencyDetails.student_summary.affiliations ? deficiencyDetails.student_summary.affiliations.map((affiliation=> <span className="modalText1">{affiliation.role}</span>)) : " "}
                        </div>
                        <div className="modalContainer5">
                            {deficiencyDetails.student_summary.affiliations ? deficiencyDetails.student_summary.affiliations.map((affiliation=> <span className="modalText1">{affiliation.organization.name}</span>)): " "}
                        </div>       
                    </div>
                    <div className="modalContainer2">
                        <div className="modalContainer3">
                            <span className="modalText1">Encoded by: {deficiencyDetails.added_by}</span>
                            <span className="modalText1">Processed by: {deficiencyDetails.processed_by}</span>
                        </div>

                        <div className="modalContainer3">
                            <span className="modalText1">Date: {deficiencyDetails.date_added}</span>
                            <span className="modalText1">Date: {deficiencyDetails.date_fulfilled}</span>
                        </div>
                    </div>
                    <div className="modalContainer2">
                        <div className="modalContainer3">
                            <span className="modalText1">Date: 2023-01-19 03:14:07</span>
                        </div>
                        <div className="modalContainer3">
                            <span className="modalText1">Date: 2023-01-19 03:14:07</span>
                        </div>
                    </div>
                    <div className="modalContainer6">

                    {adminMode ? <button className="modalButton"
                    onClick={updateDeficiency}> Update </button> : ""}
                    
                    <button className="modalButton"
                    onClick={closeModal}> Close </button>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeficiencyModalEmployee;