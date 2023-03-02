import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";

const AddDeficiencyModal = ({ closeModal }) => {

    const [deficiencystate, setdeficiencystate] = useState("document");
    const [deficiencyNameInput, setDeficiencyNameInput] = useState("");
    const setActiveDeficiencyName = useDeficiencyNamesStore((state) => state.setActiveDeficiencyName);
    const navigate = useNavigate();

    const onChange = (e) => {
        setDeficiencyNameInput(e.target.value);
    }

    const gotoPage = () => {
        if (deficiencyNameInput !== "") {
            navigate("/StudentsWithDeficiency");
            setActiveDeficiencyName({"name":deficiencyNameInput, "category": deficiencystate === "document" ? "Document" : "Finance"});
        }
        
    } 

    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer7">
                    <div className="modalContainer8">
                        <span className="modalText2">Add Deficiency</span>
                    </div>
                    <div className="modalContainer9">
                        <div className="modalContainer10">
                            <span className="modalText3">Deficiency</span>
                            <span className="modalText3">Category</span>
                        </div>
                        <div className="modalContainer11">
                            <input className="modalInput" placeholder="Form 138" onChange={onChange}></input>
                            <select className="modalSelect" onChange={(e) => {
                                const selectstate = e.target.value;
                                setdeficiencystate(selectstate)
                            }}>
                                <option value="document">Document</option>
                                <option value="finance">Finance</option>
                            </select>
                        </div>
                    </div>
                    <div className="modalContainer12">
                        <button className="modalButton1"
                            onClick={() => { closeModal(false) }}> Cancel </button>
                            <button className="modalButton2" onClick={gotoPage} > Add </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDeficiencyModal;