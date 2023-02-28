import React from "react"
import { useState, useEffect } from "react"
import { fetchDeficiencyNames } from "../../functions/employee";
import DeficiencyNamesRow from "./DeficiencyNamesRow";

const DeficiencyNamesTable = () => {
    const [deficiencyNames, setDeficiencyNames] = useState([]);
    

    useEffect(() => {
        async function getDeficiencyNames() {
            const response = await fetchDeficiencyNames();
            if (response.warning) {
                setDeficiencyNames("You don't have any deficiencies");
            } else {
                const deficiencyList = response.map((deficiencyName) => 
                    <DeficiencyNamesRow deficiencyName={deficiencyName} />
                );
                setDeficiencyNames(deficiencyList);
            }
        }

        getDeficiencyNames();
    }, []);

    return (
        <div className="container15">
            <table>
                <thead>
                    <tr>
                        <th>
                            Deficiency ID
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