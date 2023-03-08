import React from "react"
import useDeficiencyModalStore from "../../hooks/useDeficiencyModalStore"

const DeficiencyListRow = ({deficiency}) => {
    const openModal = useDeficiencyModalStore((state) => state.openDeficiencyModal);
    const setactiveDeficiencyId = useDeficiencyModalStore((state) => state.setactiveDeficiencyId);


    return (
        <tr onClick={() => {
            openModal();
            setactiveDeficiencyId(deficiency.id);
        }}>
            <td>
                {deficiency.deficiency_id}
            </td>
            <td>
                {deficiency.category}
            </td>
            <td>
                {deficiency.name}
            </td>
            <td>
                {(deficiency.balance === "NA") ? "-----" : deficiency.balance }
            </td>
            <td>
                {deficiency.status}
            </td>
        </tr>
    )
}

export default DeficiencyListRow;