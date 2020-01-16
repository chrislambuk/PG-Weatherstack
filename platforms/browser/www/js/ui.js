class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.summary = document.getElementById('w-desc');
    this.temp = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.cloud = document.getElementById('w-cloud');
    this.feelslike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }
  paint(weather) {
    this.location.textContent = weather.location.name;
    this.summary.textContent = `Currently: ${weather.current.weather_descriptions}`;
    this.temp.textContent = `Temp: ${weather.current.temperature}ºC`;
    this.feelslike.textContent = `Feels Like: ${weather.current.feelslike}ºC`;
    this.icon.setAttribute('src', weather.current.weather_icons);
    this.wind.textContent = `Wind Speed: ${weather.current.wind_speed} mph`;
    this.cloud.textContent = `Cloud Cover: ${weather.current.cloudcover}%`;
    this.humidity.textContent = `Humidity: ${weather.current.humidity}%`;

  }
}