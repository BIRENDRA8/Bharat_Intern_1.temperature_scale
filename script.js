function convertTemperature() {
    var emoji = document.querySelector("#icon");
    var par = document.querySelector("#par");
    var temperatureInput = document.querySelector(".takval");
    var unitSelect = document.querySelector("#unit");
    var displayResult = document.querySelector(".value");

    var temperature = parseFloat(temperatureInput.value);

    if (unitSelect.value === "Celsius") {
        console.log(temperature, "C to F");
        let F = (temperature * 9 / 5) + 32;
        displayResult.innerHTML = F.toFixed(2) + " F";

        if (F < 32) {
            emoji.style.color = "blue";
            emoji.className = "fas fa-face-grimace";
            par.innerHTML = "Cool at freezing point";
        } else if (F > 122) {
            emoji.style.color = "red";
            emoji.className = "fas fa-face-dizzy";
            par.innerHTML = "So Warm";
        } else {
            emoji.className = "fas fa-face-grin";
            par.innerHTML = "";
            emoji.style.color = "rgb(253, 174, 37)";
        }
    } else {
        console.log(temperature, "F to C");
        let C = (temperature - 32) * (5 / 9);
        displayResult.innerHTML = C.toFixed(2) + " ºC";

        if (C < 0) {
            emoji.style.color = "blue";
            emoji.className = "fas fa-face-grimace";
            par.innerHTML = "Cool at freezing point";
        } else if (C > 50) {
            emoji.style.color = "red";
            emoji.className = "fas fa-face-dizzy";
            par.innerHTML = "So Warm";
        } else {
            emoji.className = "fas fa-face-grin";
            par.innerHTML = "";
            emoji.style.color = "rgb(253, 174, 37)";
        }
    }
}
