const API_KEY = 'd94bcd435b62a031771c35633f9f310a'
const URL = "https://api.openweathermap.org/data/2.5/forecast/daily"

//export const weatherForecast = (location) => `${URL}weather?q=${location}&appid=${API_KEY}`
/*coordinates*/
export const weatherForecast = (loc) => `${URL}?q=${loc}&units=metric&cnt=7&appid=${API_KEY}`

//api.openweathermap.org/data/2.5/weather?q=New York&APPID=dfc33fb299cb1e9d7f087aa89f2b022a


