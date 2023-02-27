import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const AddDeficiencyModal = ({ closeModal }) => {

    const [deficiencystate, setdeficiencystate] = useState("document");   
    const navigate = useNavigate();

    const gotoPage = () => {
        if (deficiencystate === "document") {
           navigate("/StudentListDocument")
        }
        if (deficiencystate === "finance") {
            navigate("/StudentListFinance")
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
                            <input className="modalInput" placeholder="Form 138"></input>
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