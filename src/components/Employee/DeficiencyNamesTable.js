import React from "react"
import { useState, useEffect } from "react"
import { fetchDeficiencyNames } from "../../functions/employee";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import DeficiencyNamesRow from "./DeficiencyNamesRow";

const DeficiencyNamesTable = () => {
    const deficiencyNames = useDeficiencyNamesStore((state) => state.deficiencyNames);
    return (
        <div className="container15">
            <table>
                <thead>
                    <tr>
                        <th>
                            Deficiency Name
                        </th>
                        <th>
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {deficiencyNames}
                </tbody>
            </table>
        </div>
    )
}

export default DeficiencyNamesTable;