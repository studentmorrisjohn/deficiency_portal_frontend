import React from "react"
import '../style.css'
import DeficiencyModal from "./DeficiencyModal"
import { useState, useEffect } from "react"

import StudentNav from "./StudentNav"
import StudentName from "./StudentName"
import DeficiencyListTable from "./DeficiencyListTable"
import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"
import DeficiencyModalEmployee from "../Employee/DeficiencyModalEmployee"

const HomescreenStudent = () => {
    const deficiencyModal = useDeficiencyModalStore((state) => state.deficiencyModal);

    return (
        <>
            <div> {deficiencyModal && <DeficiencyModalEmployee />} </div>
            <div className="screenLayout">
                <StudentNav />

                <div className="title_contentDiv">
                    <span className="page-title">Home</span>
                    <div className="outerDiv">
                        <StudentName />
                        <DeficiencyListTable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomescreenStudent;

