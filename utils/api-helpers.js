export async function fetchGetJSON(url) {
    try {
        const data = await fetch(url).then((res) => res.json());
        return data;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
export async function fetchPostJSON(url, data) {
    try {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data || {}), // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }
    catch (err) {
        throw new Error(err.message);
    }
}