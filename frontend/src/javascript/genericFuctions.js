import axios from 'axios';

/**
 * @function saveFormInputs
 * @summary - Will make a post or put http requisition using AXIOS
 * @param {String} url - url to http requisition
 * @param {Object} formData  - the data to post or put at the requisition
 */
export function saveFormInputs(url, formData) {
    axios['post'](url, formData)
        .then(res => res.data);
}

export function getDatas(url) {
    axios['get'](url)
        .then(res => console.log(res.data))
}