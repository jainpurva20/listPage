const axios = require('axios');

export const getData = (url) => {
    return axios.get(url)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return { error };
        })
}