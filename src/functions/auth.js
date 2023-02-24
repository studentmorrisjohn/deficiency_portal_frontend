export async function login(username, password) {
    const url = `${process.env.REACT_APP_API_URL}/api/accounts/login`
    const body = JSON.stringify({ username, password });

    const response = await fetch(url, {
        method: 'POST',
        body: body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });

    return response;
}

export async function checkAuthenticated () {
    const url = `${process.env.REACT_APP_API_URL}/api/accounts/isAuthenticated`
    
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}