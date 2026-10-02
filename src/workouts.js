// workouts.js

const addWorkout = document.createElement("button");
addWorkout.textContent = "Add Workout";

addWorkout.addEventListener("click", () => {
    displayForm();
});

function displayForm(){
    const testDiv = document.createElement("div");
    testDiv.textContent = "test";
    console.log(testDiv)
    return testDiv;
}

export { addWorkout, displayForm };