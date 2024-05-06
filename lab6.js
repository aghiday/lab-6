document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('clickMeButton');
    var input = document.getElementById('nameInput');
    var startButton = document.getElementById('startTimerButton');
    var stopButton = document.getElementById('stopTimerButton');
    var clickCounterButton = document.getElementById('clickCounter');
    
    button.addEventListener('click', buttonClicked);
    input.addEventListener('input', inputChanged);
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    clickCounterButton.addEventListener('click', () => {
        output.textContent = `Button has been clicked ${num_clicks()} times`;
    });
});

var timerId; // This will hold the timer id for clearInterval

function buttonClicked() {
    console.log("Button clicked!");
    var outputDiv = document.getElementById('output');
    outputDiv.textContent = "Button clicked!";
}

function inputChanged() {
    var input = document.getElementById('nameInput');
    var name = input.value.trim();
    var outputDiv = document.getElementById('output');
    
    if (name) {
        outputDiv.textContent = `Hello, ${name}!`;
    }
}

function startTimer() {
    var seconds = 0;
    var outputDiv = document.getElementById('output');

    function tick() {
        seconds++;
        outputDiv.textContent = `Timer: ${seconds} seconds`;
    }

    timerId = setInterval(tick, 1000); // Call tick every second
}

function stopTimer() {
    clearInterval(timerId);
    var outputDiv = document.getElementById('output');
    outputDiv.textContent += " (stopped)";
}

// Click counter setup
function clickCounter() {
    var click_nums = 0;
    return function click() {
        click_nums += 1;
        return click_nums;
    }
}

var num_clicks = clickCounter();
