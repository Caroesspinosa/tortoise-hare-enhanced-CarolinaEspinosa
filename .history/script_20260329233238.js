let easyBtn = document.getElementById("easy-mode");
let textBox = document.getElementById("textSleep");
let hareSleep = 0;


easyBtn.addEventListener("click", function() {
    if (hareSleep === 0) {
        easyBtn.textContent = "Wake the Hare";
    }
}