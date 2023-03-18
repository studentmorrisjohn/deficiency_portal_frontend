import '../../style.css';
import EmployeeNav from "../EmployeeNav";
import React from 'react';
import Chart from './Chart';
import { ResponsiveContainer } from 'recharts';
import DeficiencyNamesSearch from '../DeficiencyNamesSearch';
import DeficiencyNamesTable from '../DeficiencyNamesTable';
import Chart2 from './Chart2';


const EmployeeDashboard = () => {


    return (
        <>

            <div className="screenLayout">
                <EmployeeNav />
                <div className="title_contentDiv">
                    <span className="page-title"> Dashboard </span>
                    <div className="outerDiv">

                        <div className='dashboardDiv'>
                            <div className="dashboardInfoDiv">
                                <span className='infoCategory'>Total No. Of Deficiency</span>
                                <span className='infoFetched'>28</span>
                                <span className='infoCategory'>No. of Students with PENDING Deficiency</span>
                                <span className='infoFetched_red'>12,763</span>
                                <span className='infoCategory'>No. of Students with COMPLETED Deficiency</span>
                                <span className='infoFetched_green'>10,234</span>
                            </div>

                            <div className='chart'>
                                <ResponsiveContainer  width="100%" height="100%">
                                    <Chart2/>
                                </ResponsiveContainer>
                            </div>

                            <div className='chart'>
                                <ResponsiveContainer  width="100%" height="100%">
                                    <Chart/>
                                </ResponsiveContainer>
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