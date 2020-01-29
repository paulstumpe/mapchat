const axios = require('axios');
const {
  API_KEY
} = require('./keys').googlePlaces;

const getPlaces = (query) => {
  const {
    latitude,
    longitude,
    radius,
  } = query;

  const headers = {
    Authorization: `Bearer ${API_KEY}`,
  };
  const url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters'
  return axios.get(url, { headers })
};

module.exports.getPlaces = getPlaces;