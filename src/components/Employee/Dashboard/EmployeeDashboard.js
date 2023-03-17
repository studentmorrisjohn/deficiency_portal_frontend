import '../../style.css';
import EmployeeNav from "../EmployeeNav";
import React from 'react';
import Chart from './Chart';
import { ResponsiveContainer } from 'recharts';
import DeficiencyNamesSearch from '../DeficiencyNamesSearch';
import DeficiencyNamesTable from '../DeficiencyNamesTable';


const EmployeeDashboard = () => {


    return (
        <>

            <div className="screenLayout">
                <EmployeeNav />
                <div className="title_contentDiv">
                    <span className="page-title"> Dashboard </span>
                    <div className="outerDiv">

                        <div className='dashboardDiv'>
                            <div className="modalCol">
                                <div className="modalRow">
                                    <div className="modalCategory">
                                        <span>Name:</span>
                                    </div>
                                    <div className="modalFetched">
                                        <span>Name</span>
                                    </div>
                                </div>
                                <div className="modalRow">
                                    <div className="modalCategory">
                                        <span>Deficiency:</span>
                                    </div>
                                    <div className="modalFetched">
                                        <span>Deficiency</span>
                                    </div>
                                </div>
                                <div className="modalRow">
                                    <div className="modalCategory">
                                        <span>Webmail:</span>
                                    </div>
                                    <div className="modalFetched">
                                        <span>Webmail</span>
                                    </div>
                                </div>
                            </div>

                            <div className='chart'>
                                <ResponsiveContainer  width="100%" height="100%">
                                    <Chart/>
                                </ResponsiveContainer>
                            </div>

                            <div className='modalCol'>
                                <select>
                                    <option>Yes</option>
                                </select>
                            </div>


                        </div>

                        <div className="innerDivider">
                            <div className="divStudentDeficiencySearch">
                                
                                <DeficiencyNamesSearch />

                            </div>
                            <DeficiencyNamesTable />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default EmployeeDashboard;