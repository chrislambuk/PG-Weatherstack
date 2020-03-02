document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	// ================
	class Weather {
		constructor(city) {
			this.apiKey = '994353483a16b4077117aafb33304699';
			this.city = city;
		}

		async getWeather() {
			const response = await fetch(
				`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`
			);

			const responseData = await response.json();
			return responseData;
		}

		changeLocation(city) {
			this.city = city;
		}
	}
	// ==============
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
			this.windspeed = document.getElementById('windspeed');
			this.cloudcover = document.getElementById('cloudcover');
			this.humid = document.getElementById('humid');
		}
		paint(weather) {
			this.location.textContent = weather.request.query;
			this.summary.textContent = `NOW: ${weather.current.weather_descriptions}`;
			this.temp.textContent = `Temp: ${weather.current.temperature}ºC`;
			this.feelslike.textContent = `Feels Like: ${weather.current.feelslike}ºC`;
			this.icon.setAttribute('src', weather.current.weather_icons);
			this.wind.textContent = `Wind Speed: ${weather.current.wind_speed} mph`;
			this.windspeed.style.width = `${weather.current.wind_speed}%`;
			this.cloud.textContent = `Cloud Cover: ${weather.current.cloudcover}%`;
			this.cloudcover.style.width = `${weather.current.cloudcover}%`;
			this.humidity.textContent = `Humidity: ${weather.current.humidity}%`;
			this.humid.style.width = `${weather.current.humidity}%`;
		}
  }
  
	// ==============
	class Storage {
		constructor() {
			this.city = city;
			this.defaultCity = 'London';
		}

		getLocationData() {
			if (localStorage.getItem('city') === null) {
				this.city = 'this.defaultCity';
			} else {
				this.city = localStorage.getItem('city');
			}
			return {
				city: this.city
			};
		}
		setLocationData(city) {
			localStorage.setItem('city', city);
		}
	}



	// =========
	const storage = new Storage();

	const weatherLocation = storage.getLocationData();

	const weather = new Weather(weatherLocation.city);

	const ui = new UI();

	// document.addEventListener('DOMContentLoaded', getWeather);

	document.getElementById('w-change-btn').addEventListener('click', e => {
		const city = document.getElementById('city').value;
		console.log(city);
		weather.changeLocation(city);
		storage.setLocationData(city);
		getWeather();
		document.getElementById('city').value = '';
		$('#locModal').modal('hide');
	});

	function getWeather() {
		weather
			.getWeather()
			.then(results => {
				ui.paint(results);
				console.log(results);
			})
			.catch(err => console.log(err));
	}
	getWeather();
}
