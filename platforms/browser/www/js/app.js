const storage = new Storage();

const weatherLocation = storage.getLocationData()

const weather = new Weather(weatherLocation.city);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  console.log(city)
  weather.changeLocation(city);
  storage.setLocationData(city);
  getWeather();
  document.getElementById('city').value = '';
  $('#locModal').modal('hide');
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
      console.log(results)
    })
    .catch(err => console.log(err));
}