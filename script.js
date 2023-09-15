class WeatherData {
    constructor(date, high, low) {
      this.date = date;
      this.high = high;
      this.low = low;
    }
  }

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

async function parseJSON(start_location) {
    let input_location = 'new-york';
    if (start_location == false) {
        let input_location = document.getElementById('location').value;
        input_location = parseLocation(input_location)
    }
    const data = await getJSON(input_location)
    console.log(data)
    const forecast = data.forecast.forecastday
    const weather_array = []
    for (day in forecast) {
        weather_array.push(new WeatherData(forecast[day].date, forecast[day].day.mintemp_f, forecast[day].day.maxtemp_f))
    }
    return weather_array
}

async function changeData(start) {
    const dates = document.querySelectorAll("#date");
    const highs = document.querySelectorAll("#high");
    const lows = document.querySelectorAll("#low");
    let forecast = null;
    if (start == true) {
        forecast = await parseJSON(true)
    }
    else {
        forecast = await parseJSON(false)
    }
    console.log(forecast)
    for (let i = 0; i < 3; i++) {
        dates[i].innerHTML = forecast[i].date;
        highs[i].innerHTML = forecast[i].high;
        lows[i].innerHTML = forecast[i].low;
    }
}

changeData(true)


