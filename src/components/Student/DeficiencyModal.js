import React, { useState, useEffect } from "react"
import { fetchDeficiencyDetails } from "../../functions/student";
import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"

const DeficiencyModal = () => {
    const closeModal = useDeficiencyModalStore((state) => state.closeDeficiencyModal);
    const activeDeficiencyId = useDeficiencyModalStore((state) => state.activeDeficiencyId);
    const adminMode = useDeficiencyModalStore((state) => state.adminMode);

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

    useEffect(() => {
        async function getDeficiencyDetails() {
            const response = await fetchDeficiencyDetails(activeDeficiencyId);
            setDeficiencyDetails(response);
        }
        getDeficiencyDetails();

    }, []);


    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="modalHeader">
                        <span className="deficiencycompleted_text">Deficiency ID: {deficiencyDetails.id}</span>
                    </div>

                    <div className="modalDiv">
                        <div className="modalCol">
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Name:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.student_summary.name}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Deficiency:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.name}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Webmail:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>j@iskolarngbayan.pup.edu.ph</span>
                                </div>
                            </div>
                        </div>
                        <div className="modalCol">
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Category:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.category}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Status:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.status}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Contact No.:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>09XXXXXXXXX</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modalDiv">
                        <div className="modalCol3rds">
                            <div className="modalCategory">
                                <span>Affiliation</span>
                            </div>
                        </div>
                        <div className="modalCol3rds">
                            {deficiencyDetails.student_summary.affiliations ? deficiencyDetails.student_summary.affiliations.map((affiliation => <span className="modalText1">{affiliation.role}</span>)) : " "}
                        </div>
                        <div className="modalCol3rds">
                            {deficiencyDetails.student_summary.affiliations ? deficiencyDetails.student_summary.affiliations.map((affiliation => <span className="modalText1">{affiliation.organization.name}</span>)) : " "}
                        </div>
                    </div>

                    <div className="modalDiv">
                        <div className="modalCol">
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Encoded by:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.added_by}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Processed by:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.processed_by}</span>
                                </div>
                            </div>
                        </div>
                        <div className="modalCol">
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Date:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.date_added}</span>
                                </div>
                            </div>
                            <div className="modalRow">
                                <div className="modalCategory">
                                    <span>Date:</span>
                                </div>
                                <div className="modalFetched">
                                    <span>{deficiencyDetails.date_fulfilled}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modalDiv">
                        <div className="modalCol">
                            <div className="modalFetched">
                                <span>Amount To Be Settled:</span>
                            </div>
                        </div>
                        <div className="modalCol">
                            <div className="modalCategory">
                                <span>PHP 1200</span>
                            </div>
                        </div>
                    </div>

                    <div className="modalDivFlexEnd">
                        {adminMode ? <button className="modalButton"
                            onClick={closeModal}> Update </button> : ""}

                        <button className="modalButton"
                            onClick={closeModal}> Close </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DeficiencyModal;