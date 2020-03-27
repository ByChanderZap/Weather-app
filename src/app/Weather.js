export class Weather{
    constructor(city, countryCode){
        this.apikey = '4968e5ff75b5262f004134ae5076793f';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation(city, countryCode){
        this.countryCode = countryCode;
        this.city = city;
    }
}