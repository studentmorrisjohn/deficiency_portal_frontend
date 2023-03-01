import React from "react"
import { useState, useEffect } from "react";
import DeficiencyNamesRow from "./DeficiencyNamesRow";
import { fetchDeficiencyNames } from "../../functions/employee";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";

function DeficiencyNamesSearch() {
    const [searchBoxInput, setSearchBoxInput] = useState("");
    const deficiencyNames = useDeficiencyNamesStore((state) => state.deficiencyNames);
    const setDeficiencyNames = useDeficiencyNamesStore((state) => state.setdeficiencyNames);

    async function getDeficiencyNames(inputValue) {
        const response = await fetchDeficiencyNames(inputValue);
        if (response.warning) {
            setDeficiencyNames("You don't have any deficiencies");
        } else {
            const deficiencyList = response.map((deficiencyName) => 
                <DeficiencyNamesRow deficiencyName={deficiencyName} />
            );
            setDeficiencyNames(deficiencyList);
        }
    }

    const onChange = (e) => {
        setSearchBoxInput(e.target.value);
    };

    useEffect(() => {
        getDeficiencyNames("");
    }, []);

    useEffect(() => {
        if (searchBoxInput === "") {
            getDeficiencyNames(searchBoxInput);
        }
        
    }, [searchBoxInput]);

    const searchName = () => {
        getDeficiencyNames(searchBoxInput);
    }


    return (<>
        <input placeholder="Deficiency" className="text-input3" name="deficiencyNameSearchInput" onChange={onChange}></input>
        <button className="home-button4" onClick={searchName}>Search</button>
     </> );
}

export default DeficiencyNamesSearch;