class AppMaps {
  constructor(weather, nasa, greeting, newDate, clock, stocks, giphy, quotes) {
    this.weather = weather;
    this.nasa = nasa;
    this.greeting = greeting;
    this.newDate = newDate;
    this.clock = clock;
    this.stocks = stocks;
    this.giphy = giphy;
    this.quotes = quotes;
  }

  start() {
    this.weather.loadWeather();
    this.nasa.getNasa();
    this.greeting.loadName();
    this.newDate.getDate();
    this.clock.getTime();
    this.stocks.getStocks();
    this.giphy.getGiphy();
    this.quotes.getQuotes();
  }
}
