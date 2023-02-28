import Cookies from 'js-cookie';

export async function fetchName () {
    // const url = `${process.env.REACT_APP_API_URL}/api/student/student-name`;
    
    // const response = await fetch(url);
    // const jsonData = await response.json();

    const jsonData = {
        "first_name": "Morris John",
        "middle_name": "Antipolo",
        "last_name": "Montemayor",
        "username": "2019-041799-MN-0"
    };

    return jsonData;
}

export async function fetchDeficiencyList() {
    // const url = `${process.env.REACT_APP_API_URL}/api/student/deficiencies`;

    // const response = await fetch(url);
    // const jsonData = await response.json();

    const jsonData = [
        {
            "id": 1,
            "category": "Finance",
            "name": "Utang Sa Club haha",
            "status": "Pending",
            "balance": 135.0
        },
        {
            "id": 2,
            "category": "Document",
            "name": "Form 137",
            "status": "Pending",
            "balance": "NA"
        }
    ]

    return jsonData;
}

export async function fetchDeficiencyDetails(deficiency_id) {
    // const url = `${process.env.REACT_APP_API_URL}/api/student/deficiency-details/${deficiency_id}`;

    // const response = await fetch(url);
    // const jsonData = await response.json();

    const jsonData = {
        "id": 1,
        "category": "Finance",
        "name": "Utang Sa Club haha",
        "status": "Pending",
        "balance": 135.0,
        "student_summary": {
            "student_id": "2019-041799-MN-0",
            "name": "Montemayor, Morris John Antipolo",
            "affiliations": [
                {
                    "id": 7,
                    "organization": {
                        "name": "American Concrete Institute Philippines - Polytechnic University of the Philippines Student Chapter- (ACIP-PUPSC)"
                    },
                    "role": "Member"
                },
                {
                    "id": 10,
                    "organization": {
                        "name": "Association of Concerned Computer Engineering Students for Service (ACCESS)"
                    },
                    "role": "Pogi sa Club"
                },
                {
                    "id": 11,
                    "organization": {
                        "name": "Christians on Demand at Law"
                    },
                    "role": "Epal"
                },
                {
                    "id": 12,
                    "organization": {
                        "name": "PUP KASARIANLAN"
                    },
                    "role": "Papa"
                }
            ]
        },
        "added_by": "John Doe",
        "processed_by": "------",
        "date_added": "2023-02-23",
        "date_fulfilled": null
    }
    return jsonData;
}

export async function fetchProfileData() {
    // const url = `${process.env.REACT_APP_API_URL}/api/student/profile`;

    // const response = await fetch(url);
    // const jsonData = await response.json();

    const jsonData = {
        "username": "2019-041799-MN-0",
        "name": "Montemayor, Morris John Antipolo",
        "gender": null,
        "birth_date": null,
        "department": "Bachelor of Science in Interior Design (BSID)",
        "mobile_number": null,
        "email": ""
    }
    return jsonData;
}

export async function fetchAffiliationList() {
    // const url = `${process.env.REACT_APP_API_URL}/api/student/affiliations`;

    // const response = await fetch(url);
    // const jsonData = await response.json();

    const jsonData = [
        {
            "id": 7,
            "organization": {
                "name": "American Concrete Institute Philippines - Polytechnic University of the Philippines Student Chapter- (ACIP-PUPSC)"
            },
            "role": "Member"
        },
        {
            "id": 10,
            "organization": {
                "name": "Association of Concerned Computer Engineering Students for Service (ACCESS)"
            },
            "role": "Pogi sa Club"
        },
        {
            "id": 11,
            "organization": {
                "name": "Christians on Demand at Law"
            },
            "role": "Epal"
        },
        {
            "id": 12,
            "organization": {
                "name": "PUP KASARIANLAN"
            },
            "role": "Papa"
        }
    ]
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