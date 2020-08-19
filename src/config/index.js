/* eslint-disable linebreak-style */
// eslint-disable-next-line no-undef
const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://projectreactflix.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};
