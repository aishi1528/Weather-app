document.getElementById("getWeatherBtn").addEventListener("click", async function () {

  const city = document.getElementById("city").value.trim();

  

  
  const apiKey = "254821b11135998de4340c223c7eba6d"; 

  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    if (data.cod !== 200) {

      throw new Error(data.message);

    }

    document.getElementById("result").innerHTML = `

      <h2>${data.name}, ${data.sys.country}</h2>

      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>

      <p>Temperature: ${data.main.temp}°C</p>

      <p>Humidity: ${data.main.humidity}%</p>

      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">

    `;

  } catch (error) {

    document.getElementById("result").innerHTML = `<p style="color:red;">${error.message}</p>`;

  }

});
