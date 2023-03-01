import React from "react";
import '../style.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";
import EmployeeNav from './EmployeeNav.js'
import StudentListTable from "./StudentListTable";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";

const StudentListDocument = () => {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);

    return (
        <>
            <div className="container2">
                <EmployeeNav />
                <div className="container16">
                    <div className="container17">
                        <span className="home-text19">{activeDeficiencyName.name} ({activeDeficiencyName.category})</span>
                    </div>
                    <div className="container18">
                        <div className="container19">
                            <span className="home-text20">Enter Keyword:</span>
                            <input placeholder="Student Number"></input>
                            <span className="home-text20">Enter Keyword:</span>
                            <input placeholder="Name"></input>
                            <button className="home-button6">Search</button>
                            <button className="home-button7">Add New Student</button>
                        </div>
                        <div className="container20">
                            <StudentListTable />
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

export default StudentListDocument;