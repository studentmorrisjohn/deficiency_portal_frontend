import React from "react";
import '../style.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import EmployeeNav from './EmployeeNav.js'
import StudentWithDeficiencyListTable from "./StudentWithDeficiencyListTable";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import DeficiencyModal from "../Student/DeficiencyModal";
import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"
import StudentsWithDeficiencySearch from "./StudentsWithDeficiencySearch";

const StudentsWithDeficiency = () => {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const deficiencyModal = useDeficiencyModalStore((state) => state.deficiencyModal);

    return (
        <>
            <div> {deficiencyModal && <DeficiencyModal />} </div>
            <div className="container2">
                <EmployeeNav />
                <div className="container16">
                    <div className="container17">
                        <span className="home-text19">{activeDeficiencyName.name} ({activeDeficiencyName.category})</span>
                    </div>
                    <div className="container18">
                        <StudentsWithDeficiencySearch />
                        <div className="container20">
                            <StudentWithDeficiencyListTable />
                        </div>
                        <div className="container21">
                            <span className="home-text21">Showing 1 to 10 of 150 entries</span>
                            <div className="container22">
                                <button className="home-button8"> Prev </button>
                                <button className="home-button8">1</button>
                                <button className="home-button8">2</button>
                                <button className="home-button8">3</button>
                                <button className="home-button8">4</button>
                                <button className="home-button8">5</button>
                                <button className="home-button8"> Next </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentsWithDeficiency;