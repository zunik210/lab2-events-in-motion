let clickCount = 0;

function clickFunction() {
    clickCount++;

    document.getElementById("reactionMessage").innerHTML =
        "You clicked " + clickCount + " times.";
}