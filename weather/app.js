window.addEventListener ('load', () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector (
    '.temperature-description'
  );
  let temperatureDegree = document.querySelector ('.temperature-degree');
  let tlocationTimezone = document.querySelector ('.location-timezone');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition (position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/f11990b2667871f374a5626d20445c78/${lat},${long}`;
      fetch (api)
        .then (response => {
          return response.json ();
        })
        .then (data => {
          console.log (data);
          const {temperature, summary} = data.currently;
        });
    });
  } else {
    h1.textContent = 'Please Activate Your Location';
  }
});
