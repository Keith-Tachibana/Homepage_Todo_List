const weather = new Weather();
const nasa = new Nasa();
const greeting = new Greeting();
const newDate = new NewDate();
const clock = new Clock();
const news = new News();
const app = new App(weather, nasa, greeting, newDate, clock, news);

app.start();
