export async function fetchDeficiencyNames() {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-name-list`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchDeficiencyNamesOption(inputValue) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-names?name=${inputValue}`;

    const response = await fetch(url);

    const jsonData = await response.json();
    return jsonData;
}

