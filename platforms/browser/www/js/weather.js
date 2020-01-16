class Weather {
  constructor(city) {
    this.apiKey = '994353483a16b4077117aafb33304699';
    this.city = city
  }

  async getWeather() {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

    const responseData = await response.json()
    return responseData;

  }

  changeLocation(city) {
    this.city = city;
  }
}