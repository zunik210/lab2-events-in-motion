let clickCount = 0;
let userName = "";
let actions = [];

let messages = [
    "Nice reaction!",
    "Keep going!",
    "You are interacting with the page.",
    "Think before you react!"
];


function clickFunction() {

    userName = document.getElementById("nameInput").value;

    clickCount++;

    if (userName == "") {
        userName = "Guest";
    }

    if (clickCount == 1) {
        document.getElementById("reactionMessage").innerHTML =
            "Hello " + userName + "! You clicked the button once.";
    } else if (clickCount < 5) {
        document.getElementById("reactionMessage").innerHTML =
            userName + ", you have clicked " + clickCount + " times.";
    } else {
        document.getElementById("reactionMessage").innerHTML =
            userName + ", you have really been reacting!";
    }

    actions.push("Clicked the button");

    showHistory();
}
