import React, {useState, useEffect } from "react"
import { fetchAffiliationList } from "../../functions/student";
import AddAffiliationRow from "./AddAffiliationRow";
import AffiliationTableRow from "./AffiliationTableRow";

const AffiliationTable = () => {
    const [affiliationList, setAffiliationList] = useState([]);

    async function getAffiliationList() {
        const response = await fetchAffiliationList();
        console.log("getting list");
        if (response.affiliations === "none") {
            setAffiliationList("You don't have any affiliations");
        } else {
            const affiliationList = response.map((affiliation) => 
                <AffiliationTableRow 
                affiliation={affiliation} getAffiliationList={getAffiliationList}
                />
            );
            setAffiliationList(affiliationList);
        }
    }

    useEffect(() => {
        getAffiliationList();
    }, []);

    return (
        <div className="center-div">
            <table>
                <thead>
                    <tr>
                        <th>
                            Organization Name
                        </th>
                        <th>
                            Position
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {affiliationList}
                    <AddAffiliationRow refreshList={getAffiliationList} />                    
                </tbody>
            </table>
        </div>
    )
}

export default AffiliationTable;