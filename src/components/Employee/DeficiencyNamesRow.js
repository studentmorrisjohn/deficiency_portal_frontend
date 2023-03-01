import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import { useNavigate } from "react-router-dom";

function DeficiencyNamesRow({deficiencyName}) {
    const setActiveDeficiencyName = useDeficiencyNamesStore((state) => state.setActiveDeficiencyName);
    const navigate = useNavigate();

    const gotoPage = () => {
        setActiveDeficiencyName({"name":deficiencyName.name, "category": deficiencyName.category});
        navigate(deficiencyName.category === "Finance" ? "/StudentListFinance" : "/StudentListDocument");
    }

    return ( 
    <tr onClick={gotoPage}>
        <td>
            {deficiencyName.name}
        </td>
        <td>
            {deficiencyName.category}
        </td>
    </tr> );
}

export default DeficiencyNamesRow;