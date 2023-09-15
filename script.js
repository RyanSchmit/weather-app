async function getJSON(location) {
    const api_key = '3e21839e546a405eb90200255231408';
    const base_url = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location}&days=7`;
    const response = await fetch(base_url, {mode: 'cors'});
    const data = await response.json()
    return data
}

function parseLocation(str) {
    str = str.toLowerCase();
    str = str.replaceAll(' ', '-')
    return str
}

async function getTemps() {
    let input_location = document.getElementById('location').value;
    input_location = parseLocation(input_location)
    const data = await getJSON(input_location)
    console.log(data)
    const weather_array = data.forecast.forecastday
    for (day in weather_array) {
        console.log(day)
        console.log(weather_array[day].day.mintemp_f)
        console.log(weather_array[day].day.maxtemp_f)
    }
}

function changeTemps() {
    const dates = document.querySelectorAll("#date");
    const highs = document.querySelectorAll("#high");
    const lows = document.querySelectorAll("#low");
    for (let i = 0; i < 3; i++) {
        dates[i].innerHTML = "This is a date";
        highs[i].innerHTML = "This is a high";
        lows[i].innerHTML = "This is a low";
    }
}

