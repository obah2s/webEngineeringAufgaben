document.getElementById("myBtn").addEventListener("click", redenerHinzufuegen);
const ul = document.getElementById("list");
const input = document.getElementById("redenerName");
function redenerHinzufuegen() {
    resetButtons();

    var listenEintrag = document.createElement("li");
    listenEintrag.innerHTML = `${input.value} <span id="std">00</span>:<span id="min">00</span>:<span id="sec">00</span> <button>Stop</button>`;

    var sec = 0;
    var min = 0;
    var std = 0;
    var isOn = true;

    var secound = listenEintrag.querySelectorAll("span")[2];
    var minute = listenEintrag.querySelectorAll("span")[1];
    var hour = listenEintrag.querySelectorAll("span")[0];
    var reset = true;

    var timer = setInterval(updateTimer, 1000);

    var stopRedener = listenEintrag.querySelector("button");
    stopRedener.addEventListener("click", function () {
        resetButtons(); startTimer();
    });
    ul.appendChild(listenEintrag);
    input.value = "";
    input.focus();

    function updateTimer() {
        sec++;
        if (sec < 10) {
            secound.innerHTML = "0" + sec;
        } else {
            secound.innerHTML = sec;
        }
        if (sec == 60) {
            sec = 0;
            secound.innerHTML = "0" + sec;
            min++;
            if (min < 10) {
                minute.innerHTML = "0" + min;
            } else {
                minute.innerHTML = min;
            }
        }
        if (min == 60) {
            min = 0;
            std++;
            minute.innerHTML = "0" + min;
            if (std < 10) {
                hour.innerHTML = "0" + std;
            } else {
                hour.innerHTML = std;
            }
        }
    }

    function startTimer() {
        if (isOn) {
            clearInterval(timer)
            stopRedener.innerHTML = "start";
            isOn = flase;
        } else {
            timer = setInterval(updateTimer, 1000)
            stopRedener.innerHTML = "stop";
            isOn = true;
        }
    }
    function resetButtons() {
        reset = false;
        var buttons = ul.querySelectorAll("button");
        var i;
        for (i = 0; i < buttons.length; i++) {
            if (buttons[i].innerHTML === "stop") {
                buttons[i].click();
            }
        }
        reset = true;
    }

}