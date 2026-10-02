// schedule.js
const menu = document.createElement("div");
menu.id = "menu";

const october = document.createElement("div");
october.textContent = "October";
october.classList.add("sidebar");

const november = document.createElement("div");
november.textContent = "November";
november.classList.add("sidebar");

const december = document.createElement("div");
december.textContent = "December";
december.classList.add("sidebar");

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function firstOfMonth(arr, startDay) {
    const i = arr.indexOf(startDay);
    return [...arr.slice(i), ...arr.slice(0, i)];
}

function createMonth(startingDay, totalDays) {

    let weekDays = firstOfMonth(daysOfWeek, startingDay);
    console.log(weekDays)
    
    const cal = document.createElement("div");
    cal.classList.add("calendar");

    for (let i = 0; i < totalDays; i++) {
        const day = document.createElement("div");
        day.classList.add(`${weekDays[i % 7]}`)
        day.textContent = `${weekDays[i % 7]}: ${i+1}`;
        cal.append(day)
    }

    return cal;
}

menu.append(october, november, december);

october.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(menu);
    const OCT_26 = createMonth("Thu", 31);
    content.append(OCT_26);
});
november.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(menu);
    const NOV_26 = createMonth("Sun", 30);
    content.append(NOV_26);
});
december.addEventListener("click", () => {
    content.innerHTML = "";   
    content.append(menu);
    const DEC_26 = createMonth("Tue", 31);
    content.append(DEC_26);    
});

export { menu as scheduleMenu } 