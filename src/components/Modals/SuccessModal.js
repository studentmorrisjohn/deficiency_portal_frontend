import React from "react";

const Xcircle = new URL("../images/XCircle.png", import.meta.url)

const SuccessModal = () => {

    return(
        <>
        <div className="modalBackgroundTop">
                <div className="modalContainerXSmall_green">
                    <div className="modalDivTop">
                        <span className="modalWhiteTextBold">Success</span>
                        <img className="xcircle" src={Xcircle}/>
                    </div>
                    <div className="modalDiv">
                        <span className="modalWhiteSubtext">[Deficiency] was added.</span>
                    </div>
                    
                </div>
            </div>
        </>
    )

}

export default SuccessModal;