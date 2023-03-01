import React from "react"
import '../style.css'
import DeficiencyModal from "./DeficiencyModal"
import { useState, useEffect } from "react"

import StudentNav from "./StudentNav"
import StudentName from "./StudentName"
import DeficiencyListTable from "./DeficiencyListTable"
import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"

const HomescreenStudent = () => {
    const deficiencyModal = useDeficiencyModalStore((state) => state.deficiencyModal);

    return (
        <>  
            <div> {deficiencyModal && <TestModal />} </div>
            <div className="screenLayout">
                <StudentNav />

                <div className="container3">
                    <span className="home-text10">Home</span>
                </div>

                <div className="container4">
                    <StudentName />
                    <DeficiencyListTable />
                </div>
            </div>
        </>
    )
}

export default HomescreenStudent;

