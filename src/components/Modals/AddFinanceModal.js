import React, { useContext, useState } from "react";
import { fetchAddStudentToDeficiency } from "../../functions/employee";
import useFinanceDeficiencyModalStore from "../../hooks/useFinanceDeficiencyModalStore";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import useSelectedStudentStore from "../../hooks/useSelectedStudentStore";
import AddStudentContext from "../Employee/Context/AddStudentContext";

const Xcircle = new URL("../images/XCircleBlack.png", import.meta.url)

const AddFinanceModal = () => {
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);
    const selectedStudentId = useSelectedStudentStore((state) => state.selectedStudentId);
    const [balance, setBalance] = useState(0);
    const closeFinanceDeficiencyModal = useFinanceDeficiencyModalStore((state) => state.closeFinanceDeficiencyModal);
    const refreshStudentList = useContext(AddStudentContext);

    function onChange(e) {
        setBalance(e.target.value);
    }

    async function addStudent() {
        if (balance !== 0) {
            const response = await fetchAddStudentToDeficiency(activeDeficiencyName.name, selectedStudentId, activeDeficiencyName.category, balance);
            refreshStudentList();
            closeFinanceDeficiencyModal();
        }
    }

    
    return (
        <>
            <div className="modalBackground">
                <div className="modalContainerXSmall">
                    <div className="modalDivTop">
                        <span className="addDeficiencyModalHeader">Enter Amount </span>
                        <img onClick={closeFinanceDeficiencyModal}  className="xcircle" src={Xcircle}/>
                    </div>
                    <div className="modalColumn">
                        <span>Enter the amount in Pesos:</span>
                        <input onChange={onChange} className="modal_textinput" placeholder="Amount"/>
                    </div>
                    <div className="modalDivCenter">
                        <button onClick={closeFinanceDeficiencyModal} className="red_button">Cancel</button>
                        <button onClick={addStudent} className="green_button">   Add   </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFinanceModal;