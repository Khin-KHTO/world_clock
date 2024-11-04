function updateTime() {
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    let torontoTime = moment.tz("America/Toronto");
    torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = `${torontoTime.format(
      "h:mm:ss"
    )} <small>${torontoTime.format("A")}</small>`;
  }
  //
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment.tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = `${parisTime.format(
      "h:mm:ss"
    )} <small>${parisTime.format("A")}</small>`;
  }

  //
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    let singaporeTime = moment.tz("Asia/Singapore");
    singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
    singaporeTimeElement.innerHTML = `${singaporeTime.format(
      "h:mm:ss"
    )} <small>${singaporeTime.format("A")}</small>`;
  }
  //
  let yangonElement = document.querySelector("#yangon");
  if (yangonElement) {
    let yangonDateElement = yangonElement.querySelector(".date");
    let yangonTimeElement = yangonElement.querySelector(".time");
    let yangonTime = moment.tz("Asia/Yangon");
    yangonDateElement.innerHTML = yangonTime.format("MMMM Do YYYY");
    yangonTimeElement.innerHTML = `${yangonTime.format(
      "h:mm:ss"
    )} <small>${yangonTime.format("A")}</small>`;
  }
}

function updatecity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    " A"
  )}</small></div>
      </div>
      <a href="/"> All cities </a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updatecity);
