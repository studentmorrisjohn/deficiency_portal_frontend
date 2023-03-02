export async function fetchDeficiencyNames(inputValue) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-name-list?name=${inputValue}`;

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


export async function fetchStudentsWithDeficiencyList(deficiencyName, student_id, student_name) {
    var url = `${process.env.REACT_APP_API_URL}/api/employee/student-list/${deficiencyName}?student-id=${student_id}&student-name=${student_name}`;

    const response = await fetch(url);

    const jsonData = await response.json();
    return jsonData;
}

export async function fetchAllStudentsList(deficiencyName, student_id, student_name) {
    var url = `${process.env.REACT_APP_API_URL}/api/employee/all-students/${deficiencyName}?student-id=${student_id}&student-name=${student_name}`;

    const response = await fetch(url);

    const jsonData = await response.json();
    return jsonData;
}