import "./styles.css";
import { data } from "./data.js";
import { timesMenu, timesDiv } from "./times.js"
import { scheduleMenu } from "./schedule.js";
import { addWorkout, displayForm } from "./workouts.js";

const content = document.getElementById("content");
const times = document.getElementById("times");
const schedule = document.getElementById("schedule");
const workouts = document.getElementById("workouts");

times.addEventListener("click", () => {
    content.innerHTML = "";
    if(timesDiv) {
        timesDiv.innerHTML = "";
    }
    content.append(timesMenu, timesDiv);
});

schedule.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(scheduleMenu);
});

workouts.addEventListener("click", () => {
    content.innerHTML = "";
    const testDiv = displayForm();
    content.append(testDiv);
});

