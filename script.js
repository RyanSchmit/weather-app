async function getJSON(location) {
    const api_key = '3e21839e546a405eb90200255231408';
    let input_location = document.getElementById('location').value;
    input_location = parseLocation(input_location)
    const base_url = `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${input_location}&days=7`;
    const response = await fetch(base_url, {mode: 'cors'});
    const data = await response.json()
    console.log(data)
}

function parseLocation(str) {
    str = str.toLowerCase();
    str = str.replaceAll(' ', '-')
    return str
}
