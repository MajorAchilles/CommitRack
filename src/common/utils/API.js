const get = (url, headers = {}) => fetch(
    url,
    {
        method: "GET",
        headers
    }
).then(response => response.json());

const post = (url, requestBody, headers) => fetch(
    url,
    {
        method: "POST",
        headers,
        body: JSON.stringify(requestBody)
    }
);

export default {
    get,
    post
};