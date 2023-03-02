import React from "react";
import '../style.css'
import EmployeeNav from './EmployeeNav.js'
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import AddStudentTable from "./AddStudentTable";
import AddStudentSearch from "./AddStudentSearch";

const AddStudent = () => {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);

    return (
        <>
            <div className="screenLayout">
                <EmployeeNav />
                <div className="container16">
                    <div className="container17">
                        <span className="home-text19">{activeDeficiencyName.name} ({activeDeficiencyName.category})</span>
                    </div>
                    <div className="container18">
                        <AddStudentSearch />
                        <div className="container20">
                            <AddStudentTable />
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

export default AddStudent;