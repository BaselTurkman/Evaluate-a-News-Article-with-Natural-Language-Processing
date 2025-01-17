const valid = require('valid-url');
const isValid = (url) => Boolean(valid.isWebUri(`${url}`));
const validateURL = (url) => {
    return isValid(url);
}
export { validateURL };