import Cookies from 'js-cookie';

export async function fetchName () {
    const url = `${process.env.REACT_APP_API_URL}/api/accounts/user-name`;
    
    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchDeficiencyList() {
    const url = `${process.env.REACT_APP_API_URL}/api/student/deficiencies`;

    const response = await fetch(url);
    const jsonData = await response.json();


    return jsonData;
}

export async function fetchDeficiencyDetails(deficiency_id) {
    const url = `${process.env.REACT_APP_API_URL}/api/student/deficiency-details/${deficiency_id}`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchProfileData() {
    const url = `${process.env.REACT_APP_API_URL}/api/student/profile`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchUpdateProfile(mobile_number, email) {
    const url = `${process.env.REACT_APP_API_URL}/api/student/profile`;

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

export async function fetchAffiliationList() {
    const url = `${process.env.REACT_APP_API_URL}/api/student/affiliations`;

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
}

export async function fetchDeleteAffiliation(affiliationId) {
    const url = `${process.env.REACT_APP_API_URL}/api/student/affiliation/${affiliationId}`;

    const response = await fetch(url, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        });

    const jsonData = await response.json();
    return jsonData;
}

export async function fetchOrganizationOptions(inputValue) {
    const url = `${process.env.REACT_APP_API_URL}/api/student/organizations?name=${inputValue}`;

    const response = await fetch(url);

    const jsonData = await response.json();
    return jsonData;
}

export async function fetchAddAffiliation(organization, role) {
    const url = `${process.env.REACT_APP_API_URL}/api/student/affiliations`
    const body = JSON.stringify({ organization, role });

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

    return response;
}