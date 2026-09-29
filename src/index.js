import "./styles.css";
import { data } from "./data.js";

const content = document.getElementById("content");

const menu = document.createElement("div");
menu.id = "menu";

const fourHundredM = document.createElement("div");
fourHundredM.textContent = "400m";
fourHundredM.classList.add("col1");

const halfMile = document.createElement("div");
halfMile.textContent = "Half Mile";
halfMile.classList.add("col1");

const oneK = document.createElement("div");
oneK.textContent = "1K";
oneK.classList.add("col1");

const oneMile = document.createElement("div");
oneMile.textContent = "1 Mile";
oneMile.classList.add("col1");

const twoMile = document.createElement("div");
twoMile.textContent = "2 Miles";
twoMile.classList.add("col1");

const fiveK = document.createElement("div");
fiveK.textContent = "5K";
fiveK.classList.add("col1");

const tenK = document.createElement("div");
tenK.textContent = "10K";
tenK.classList.add("col1");

menu.append(
    fourHundredM,
    halfMile,
    oneK,
    oneMile,
    twoMile,
    fiveK,
    tenK
)
content.append(menu);

const timesDiv = document.createElement("div");
timesDiv.classList.add("times")
content.append(timesDiv);

fourHundredM.addEventListener("click", () => {
    const times = getTimes("400m");
    clearDiv();
    makeDivs("400m", times);
});
halfMile.addEventListener("click", () => {
    const times = getTimes("Half-Mile");
    clearDiv();
    makeDivs("Half-Mile", times);
});
oneK.addEventListener("click", () => {
    const times = getTimes("1K");
    clearDiv();
    makeDivs("1K", times);
});
oneMile.addEventListener("click", () => {
    const times = getTimes("1-Mile");
    clearDiv();
    makeDivs("1-Mile", times);
});
twoMile.addEventListener("click", () => {
    const times = getTimes("2-Mile");
    clearDiv();
    makeDivs("2-Mile", times);
});
fiveK.addEventListener("click", () => {
    const times = getTimes("5K");
    clearDiv();
    makeDivs("5K", times);
});
tenK.addEventListener("click", () => {
    const times = getTimes("10K");
    clearDiv();
    makeDivs("10K", times);
});

/*
for (const time of Object.keys(data)) {
    console.log(time, data[time]);
}
*/


function getTimes(length) {
    let times = [];
    for(const time of data[length]) {
        times.push(time);
    }
    return times;
}

function makeDivs(length, times) {
    const title = document.createElement("h1");
    const firstBestP = document.createElement("p");
    firstBestP.classList.add("pbs", "first");
    const secondBestP = document.createElement("p");
    secondBestP.classList.add("pbs", "second");
    const thirdBestP = document.createElement("p");
    thirdBestP.classList.add("pbs", "third");

    firstBestP.textContent = `1st: ${times[0].time} on ${times[0].date}`;
    secondBestP.textContent = `2nd: ${times[1].time} on ${times[1].date}`; 
    thirdBestP.textContent = `3rd: ${times[2].time} on ${times[2].date}`;

    title.textContent = `${length}`;
    timesDiv.append(title, firstBestP, secondBestP, thirdBestP);
}

function clearDiv() {
    timesDiv.innerHTML = ""
}