

export default (URL) => {
    return fetch(URL)
        .then(response => Promise.all([response, response.json()]))
}