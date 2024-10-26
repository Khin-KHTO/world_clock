let torontoElement = document.querySelector("#toronto");
let torontoDateElement = torontoElement.querySelector(".date");
let torontoTimeElement = torontoElement.querySelector(".time");
let torontoTime = moment.tz("America/Toronto");
torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
torontoTimeElement.innerHTML = `${torontoTime.format(
  "h:mm:ss"
)} <small>${torontoTime.format("A")}</small>`;
