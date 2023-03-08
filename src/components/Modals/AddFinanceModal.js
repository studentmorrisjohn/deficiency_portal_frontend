import { Button } from "bootstrap";
import React from "react";

const Xcircle = new URL("../images/XCircleBlack.png", import.meta.url)

const AddFinanceModal = () => {
    return (
        <>
            <div className="modalBackground">
                <div className="modalContainerXSmall">
                    <div className="modalDivTop">
                        <span className="addDeficiencyModalHeader">Enter Amount </span>
                        <img className="xcircle" src={Xcircle}/>
                    </div>
                    <div className="modalColumn">
                        <span>Enter the amount in Pesos:</span>
                        <input className="modal_textinput" placeholder="Amount"/>
                    </div>
                    <div className="modalDivCenter">
                        <button className="red_button">Cancel</button>
                        <button className="green_button">   Add   </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddFinanceModal;