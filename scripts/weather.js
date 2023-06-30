async function getWeatherData(latitude,longitude){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    console.log("WAETHER API CALL:" + url);

    const res = await fetch(url);
    data = await res.json();

    console.log("Response:" + JSON.stringify(data,null,2));

    const temperature = data.current_weather.temperature;
    const windspeed = data.current_weather.windspeed;
    const weathercode = data.current_weather.weathercode;

    document.getElementById("weatherp").innerText=`Weather: ${temperature}°C ${windspeed}km/h - ${getWeatherCode(weathercode)}`
}

function getWeatherCode(code){
    switch(code){
        case 0 :
            return 'Clear Sky ☀️'
        case 1:
            return 'Mainly Clear ☀️'
        case 2 :
            return 'Partly Cloudy 🌤️'
        case 3:
            return 'Overcast ☁️'
        case 45 :
            return 'Fog 🌫️'
        case 48:
            return 'Depositing Rime Fog 🌫️'
        case 51 :
            return 'Light Drizzle 💧'
        case 53:
            return 'Moderate Drizzle 💦'
        case 55 :
            return 'Dense Drizzle 💦'
        case 56:
            return 'Light Freezing Drizzle 💧❄️'
        case 57:
            return 'Dense Freezing Drizzle 💦❄️'
        case 61:
            return 'Slight Rain 🌧️'
        case 63 :
            return 'Moderate Rain 🌧️'
        case 65:
            return 'Heavy Rain 🌧️⛆'
        case 66:
            return 'Light Freezing Rain 🌧️❄️'
        case 67:
            return 'Heavy Freezing Rain 🌧️⛆❄️'
        case 71:
            return 'Slight Snow Fall 🌨️'
        case 73:
            return 'Moderate Snow Fall 🌨️'
        case 75:
            return 'Heavy Snow Fall 🌨️⛄'
        case 77:
            return 'Snow Grains 🧊'
        case 80:
            return 'Slight Rain Showers ⛈️'
        case 81:
            return 'Moderate Rain Showers ⛈️⚡'
        case 82:
            return 'Violent Rain Showers ⛈️⚡⚡'
        case 85:
            return 'Slight Snow Showers 🌨️⚡'
        case 86:
            return 'Heavy Snow Showers 🌨️⚡⛄'
        case 95:
            return 'Thunderstorm 🌪️'
        case 96:
            return 'Thunderstorm with Slight Hail 🌪️🧊'
        case 99:
            return 'Thunderstorm with Heavy Hail 🌪️⚡🧊'
        default:
            return 'undefined'
    }
}