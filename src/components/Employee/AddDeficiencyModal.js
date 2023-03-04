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
                <div className="modalContainerSmall">
                    <div className="modalDiv">
                        <span className="addDeficiencyModalHeader">Add Deficiency</span>
                    </div>
                    <div className="modalDiv">
                        <div className="modalColGap">
                            <span className="subtext_main">Deficiency</span>
                            <span className="subtext_main">Category</span>
                        </div>
                        <div className="modalColGap">
                            <input className="standard_textinput" placeholder="Form 138" onChange={onChange}></input>
                            <select className="modalSelect" onChange={(e) => {
                                const selectstate = e.target.value;
                                setdeficiencystate(selectstate)
                            }}>
                                <option value="document">Document</option>
                                <option value="finance">Finance</option>
                            </select>
                        </div>
                    </div>
                    <div className="modalDivCenter">
                        <button className="green_button"
                            onClick={() => { closeModal(false) }}> Cancel </button>
                            <button className="red_button" onClick={gotoPage} > Add </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDeficiencyModal;