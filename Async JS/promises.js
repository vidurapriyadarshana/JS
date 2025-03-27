
// Using Callback

// getWeather(displayIcon)

// function displayIcon(data) {
//     if(data === "rain") {
//         return "🌧️";
//     } else {
//         return "🌞";
//     }
// }

// function getWeather(callback) {
//     setTimeout(() => {
//         callback('rain');
//     })
// }






// Using Promice


function getWeather() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('sun');
        })
    },1000)
}

function getWeatherIcone(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            switch (data) {
                case 'rain':
                    resolve('🌧️');
                    break;
                case 'sun':
                    resolve('🌞');
                    break;
                default:
                    reject('ERROR');
            }
        },1000)
    })
}

function onSuccess(data) {
    console.log(data);       
}

function onError(error) {
    console.log(error);
}

getWeather()
    .then(getWeatherIcone)
    .then(onSuccess)
    .catch(onError);