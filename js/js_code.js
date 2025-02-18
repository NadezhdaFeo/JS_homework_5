document.addEventListener("DOMContentLoaded", function () {
    // task №1
    let click_number = 0
    const button = document.getElementById("button");
    const countclick = document.getElementById("countclick");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        click_number++;
        countclick.textContent = click_number;
        if (click_number >= 15) {
            button.disabled = true;
            message.textContent = "Maximum limit reached!";
        };
    })

    // task №2
    let time_count_1 = 10
    const timer_1 = document.getElementById("timer_1");
    const reset_1 = document.getElementById("reset_1");
    let interval;
    function startTimer() {
        interval = setInterval(function () {
            time_count_1--;
            timer_1.textContent = time_count_1;

            if (time_count_1 <= 0) {
                clearInterval(interval);
                timer_1.textContent = "Time is out!";
            }
        }, 1000);
    }

    reset_1.addEventListener("click", function () {
        clearInterval(interval);
        time_count_1 = 10
        timer_1.textContent = time_count_1;
        startTimer();

    });
    startTimer();

    // task №3
    let time = 0
    const timer_2 = document.getElementById("timer_2");
    const start_but = document.getElementById("start_but");
    const stop_but = document.getElementById("stop_but");
    const reset_but = document.getElementById("reset_but");
    let interval_2;

    start_but.addEventListener("click", function () {
        if (!interval_2) {
            interval_2 = setInterval(function () {
                time++;
                timer_2.textContent = time;
            }, 1000);
        }
    });

    stop_but.addEventListener("click", function () {
        clearInterval(interval_2);
        interval_2 = null;
    });

    reset_but.addEventListener("click", function () {
        clearInterval(interval_2);
        interval_2 = null;
        time = 0;
        timer_2.textContent = "Click start";
    });

});


