import React, {useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { fetchOrganizationOptions } from '../../functions/student';

function AddAffiliationRow() {

    async function loadOptions(inputValue) {
        const response = await fetchOrganizationOptions(inputValue);
        return response;
    }



    return ( 
    <tr>
        
            <td>
                <AsyncSelect cacheOptions defaultOptions loadOptions={loadOptions} />
            </td>
            <td>
                <input type='text' placeholder="Position" className="textbox" />
            </td>
            <td>
                <button>&#43;</button>
            </td>
        
    </tr> 
    );
}

export default AddAffiliationRow;