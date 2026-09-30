let clickCount = 0;
let userName = "";
let actions = [];

let messages = [
    "Nice reaction!",
    "Keep going!",
    "You are interacting with the page.",
    "Think before you react!"
];

//button funtion (loop)
function clickFunction() {
    userName = document.getElementById("nameInput").value;

    clickCount++;

    if (userName == "") { userName = "Guest";}
    if (clickCount == 1) {document.getElementById("reactionMessage").innerHTML =
        "Hello " + userName + "! You clicked the button once.";
    } else if (clickCount < 5) {document.getElementById("reactionMessage").innerHTML =
        userName + ", you have clicked " + clickCount + " times.";
    } else {document.getElementById("reactionMessage").innerHTML =
        userName + ", you have really been reacting!";
    }

    actions.push("Clicked the button");

    showHistory();
}

//hover events
document.getElementById("hoverBox").onmouseover = function() {
    document.getElementById("hoverBox").innerHTML =
        "You reacted by moving your mouse!";
    actions.push("Hovered over the box");
    showHistory();
};


document.getElementById("hoverBox").onmouseout = function() {

    document.getElementById("hoverBox").innerHTML =
        "Move your mouse over me!";
};

//keyboard event
document.onkeydown = function(event) {
    document.getElementById("keyMessage").innerHTML =
        "You pressed the " + event.key + " key.";
    actions.push("Pressed a key");
    showHistory();
};

//function to display the history of actions
function showHistory() {
    let historyText = "";
    for (let i = 0; i < actions.length; i++) {
        historyText += actions[i] + "<br>";
    }
    document.getElementById("history").innerHTML = historyText;
}

//window size function
function updateWindowSize() {
    document.getElementById("windowSize").innerHTML =
        "Window size: " + window.innerWidth + " x " + window.innerHeight;
}

updateWindowSize();

window.onresize = function() {
    updateWindowSize();
};

//clock function
function updateClock() {
    let currentTime = new Date();
    document.getElementById("clock").innerHTML =
        "Time: " + currentTime.toLocaleTimeString();
}

updateClock();

setInterval(updateClock, 1000);
