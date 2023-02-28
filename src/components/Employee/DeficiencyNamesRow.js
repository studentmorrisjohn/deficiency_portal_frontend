function DeficiencyNamesRow({deficiencyName}) {
    return ( <tr>
        <td>
            {deficiencyName.name}
        </td>
        <td>
            {deficiencyName.category}
        </td>
    </tr> );
}

export default DeficiencyNamesRow;