const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const respLugar = {};

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// Forma 1 (profesor)
const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ direccion } es de ${ temp } C°`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ coords.direccion }`;
    }
};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

// Forma 2 (mío)
/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        this.respLugar = resp;
        clima.getClima(this.respLugar.lat, this.respLugar.lng)
            .then(clima => {
                console.log(`El clima de ${argv.direccion} es de ${clima} C°`);
            })
            .catch(`No se pudo determinar el clima de ${argv.direccion}`);
    })
    .catch(`No se pudo determinar las coordenadas de ${argv.direccion}`);
*/