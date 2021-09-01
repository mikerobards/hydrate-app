const output = document.querySelector(".output")
const button = document.querySelector("button")
const form = document.querySelector("form")
let goal;
let unit;
let newGoal
let newUnit


function setGoal(e) {
    localStorage.clear();
    e.preventDefault()
    goal = document.getElementById("goal").value
    localStorage.setItem("goal", goal)
    let data = new FormData(form)
    for (const entry of data) {
        unit = entry[1]
        localStorage.setItem("unit", entry[1])
    }
    newGoal = localStorage.getItem("goal")
    newUnit = localStorage.getItem("unit")

    output.innerText = `Your daily goal is: ${newGoal} ${newUnit}!`
    form.style = "display: none";
}

form.addEventListener("submit", setGoal)

newGoal = localStorage.getItem("goal")
newUnit = localStorage.getItem("unit")
console.log(goal, unit)





