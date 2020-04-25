const axios = require('axios');

const getClima = async(lat, lng) => {
    const appid = 'ae4913338f7f9e699431c0a875e48024';
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ appid }&units=metric&lang=es`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};