let timer = document.querySelector("#timer");

let timeout = 5
timer.textContent = timeout;
let count = setInterval(() => {
    timeout -= 1
    timer.textContent = timeout
    if (timeout === 0) {
        clearInterval(count)
        window.location = '/';
    }
}, 1000)