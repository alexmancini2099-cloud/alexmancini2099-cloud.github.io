console.log("script.js is loaded");




let mainTitle = document.querySelector("#main-title");

mainTitle.addEventListener("click", function () { 
    alert("You clicked the main title!");
 });


/*var c = document.getElementById("chart");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.fillRect(100,100, 300, 75);
ctx.fillRect(100,200, 100, 75);
ctx.fillRect(100,300, 200, 75);
ctx.closePath();*/


/*let workouts=[
"Cardio",
"Push day",
"Pull day",
"Leg day",
];
console.log(workouts);

let times=[
3,
1,
2,
0,
];
console.log(times);


const data = workouts.map((element, index) => {
    [element, times[index]];
});

//let data= workouts.map((workout)=>({workout, times}));

console.log(data);

const chart = document.querySelector(".chart");

const createBarItems = (workoutItem) => {
let item = document.createElement("div");
let bar = document.createElement("span");
let title = document.createElement("span");

bar.style = `workout:${workoutItem}`;
title.innerText=workoutItem.workout;

bar.append(title);
item.append(bar);

return item;
};

data.forEach((workout) => chart.append(createBarItems(workout)));*/

