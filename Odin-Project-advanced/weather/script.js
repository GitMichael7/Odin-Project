const locationInput = document.querySelector("#location");
const typeInput = document.querySelector("#type");
const weatherform = document.querySelector("#weatherform");

class Weather {
  constructor(location, type) {
    this.location = location;
    this.type = type.toUpperCase();
  }

  log() {
    console.log(this.location, this.type);
  }

  async fetchData() {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c83672c17a544413977200005242005&q=${this.location}&aqi=no`,
        { mode: "cors" }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      let temp = data.current.temp_c;
      if (this.type === "F") {
        temp = (temp * 9) / 5 + 32; // Convert Celsius to Fahrenheit
      }
      console.log(
        `The temperature in ${this.location} is ${temp}°${this.type}`
      );
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }
}

weatherform.addEventListener("submit", (e) => {
  e.preventDefault();
  const locationIn = locationInput.value.trim();
  const typeIn = typeInput.value.trim().toUpperCase();

  if (!locationIn) {
    alert("Please enter a location.");
    return;
  }

  if (typeIn !== "F" && typeIn !== "C") {
    alert("Please enter 'F' for Fahrenheit or 'C' for Celsius.");
    return;
  }

  const weather = new Weather(locationIn, typeIn);
  weather.fetchData();
});
