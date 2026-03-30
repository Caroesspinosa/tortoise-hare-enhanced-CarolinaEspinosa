let easyBtn = document.getElementById("easy-mode");
let textBox = document.getElementById("textSleep");
let hareSleep = 0;

easyBtn.addEventListener("click", function () {
    if (hareSleep === 0) {
        textBox.innerHTML = "The Hare is awake!";
    }
});
