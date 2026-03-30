let easyBtn = document.getElementById("easy-mode");
let textBox = document.getElementById("textSleep");
let hareSleep = 0;

let hardBtn = document.getElementById("hard-mode");

easyBtn.addEventListener("click", function () {
    hareSleep = 0;
    if (hareSleep === 0) {
        textBox.innerHTML = "The Hare is awake!";
    }
});

hardBtn.addEventListener("click", function () {
    hareSleep = 1;
    if (hareSleep === 1) {
        textBox.innerHTML = "The Hare is asleep!";
    }
});
