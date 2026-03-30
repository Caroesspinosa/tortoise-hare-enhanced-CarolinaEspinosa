let easyBtn = document.getElementById("easy-mode");
let textBox = document.getElementById("textSleep");
let hareSleep = false;

let hardBtn = document.getElementById("hard-mode");

easyBtn.addEventListener("click", function () {
    hareSleep = false;
    if (!hareSleep) {
        textBox.innerHTML = "The Hare is awake!";
    }
});

hardBtn.addEventListener("click", function () {
    hareSleep = true;
    if (hareSleep) {
        textBox.innerHTML = "The Hare is asleep!";
    }
});
