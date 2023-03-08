import Cookies from 'js-cookie';

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

export async function fetchDeficiencyDetailsEmployee(deficiency_id) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-details/${deficiency_id}`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchUpdateDeficiency(deficiency_id, is_complete) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-details/${deficiency_id}`;

    const body = JSON.stringify({is_complete})

    const response = await fetch(url, {
        method: 'PUT',
        body: body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        credentials: 'include'
    });


    const jsonData = await response.json();

    return jsonData;
}

export async function fetchDeleteDeficiency(deficiency_id) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/deficiency-details/${deficiency_id}`;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        credentials: 'include'
    });


    const jsonData = await response.json();

    return jsonData;
}

export async function fetchAddStudentToDeficiency(deficiencyName, student_id, category, amount) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/student-list/${deficiencyName}`;

    const body = JSON.stringify({student_id, category, amount})

    const response = await fetch(url, {
        method: 'POST',
        body: body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        credentials: 'include'
    });


    const jsonData = await response.json();

    return jsonData;
}

export async function fetchUpdateProfile(mobile_number, email) {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/profile`;

    const body = JSON.stringify({mobile_number, email})

    const response = await fetch(url, {
        method: 'PUT',
        body: body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken')
        },
        credentials: 'include'
    });


    const jsonData = await response.json();

    return jsonData;
}

export async function fetchEmployeeProfile() {
    const url = `${process.env.REACT_APP_API_URL}/api/employee/profile`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

