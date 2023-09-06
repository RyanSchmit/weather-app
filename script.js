async function getWeather(location) {
    const api_key = '3e21839e546a405eb90200255231408';
    const input_location = document.querySelector('location')
    const base_url = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${input_location}&days=7`;
    const response = await fetch(base_url, {mode: 'cors'});
    const data = await response.json()
    console.log(data)
}