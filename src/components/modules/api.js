export default class API {
    async get(url) {
        const data = await fetch(url).then((response) => response.json())
            .then((data) => data);
        return data
    }

    async post(url, data = {}) {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });
        return response.json();
    }
}
