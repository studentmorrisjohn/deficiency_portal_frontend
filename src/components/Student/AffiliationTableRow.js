import React, {useState, useEffect } from "react"
import { fetchDeleteAffiliation } from "../../functions/student";

function AffiliationTableRow( {affiliation, getAffiliationList} ) {

    async function deleteAffliation() {
        const response = await fetchDeleteAffiliation(affiliation.id);
        
        getAffiliationList();
    }

    return ( 
        <tr>
            <td>
                {affiliation.organization.name}
            </td>
            <td>
                {affiliation.role}
            </td>
            <td>
                <button onClick={deleteAffliation}>
                    &#10006;
                </button>
                
            </td>
        </tr> 
    );
}

export default AffiliationTableRow;