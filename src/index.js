import "./styles.css";
import { data } from "./data.js";

const content = document.getElementById("content");
const buttonContainer = document.createElement("div");
buttonContainer.id = "buttons";

const fourHundredMButton = document.createElement("button");
fourHundredMButton.textContent = "400m";

const halfMileButton = document.createElement("button");
halfMileButton.textContent = "Half Mile";

const oneKButton = document.createElement("button");
oneKButton.textContent = "1K";

const oneMileButton = document.createElement("button");
oneMileButton.textContent = "1 Mile";

const twoMileButton = document.createElement("button");
twoMileButton.textContent = "2 Miles";

const fiveKButton = document.createElement("button");
fiveKButton.textContent = "5K";

const tenKButton = document.createElement("button");
tenKButton.textContent = "10K";

buttonContainer.append(
    fourHundredMButton,
    halfMileButton,
    oneKButton,
    oneMileButton,
    twoMileButton,
    fiveKButton,
    tenKButton
)
content.append(buttonContainer);

fourHundredMButton.addEventListener("click", () => {
    getTime("400m");
});
halfMileButton.addEventListener("click", () => {
    getTime("Half-Mile");
});
oneKButton.addEventListener("click", () => {
    getTime("1K");
});
oneMileButton.addEventListener("click", () => {
    getTime("1-Mile");
});
twoMileButton.addEventListener("click", () => {
    getTime("2-Mile");
});
fiveKButton.addEventListener("click", () => {
    getTime("5K");
});
tenKButton.addEventListener("click", () => {
    getTime("10K");
});

/*
for (const time of Object.keys(data)) {
    console.log(time, data[time]);
}
*/

console.log(data["1-Mile"])

function getTime(length) {
    const time = data[length];
    console.log(time);
    makeDiv(length, time);
}

function makeDiv(length, time) {
    const div = document.createElement("div");
    const para = document.createElement("p");

    para.textContent = `${length}: ${time}`;
    div.append(para);
    content.append(div);
}