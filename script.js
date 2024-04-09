let colorAttempts = 0;
let textSizeAttempts = 0;
let contrastAttempts = 0;

function setColor(color) {
    colorAttempts++;
    document.getElementById('box1').style.backgroundColor = color;
    const feedback = document.getElementById('color-feedback');
    if (color === '#ff0000') {
        feedback.textContent = `Great job! Red is the correct color! It took you ${colorAttempts} tries.`;
    } else {
        feedback.textContent = `Try again, that's not the correct color. Attempts: ${colorAttempts}`;
    }
}

// Function to adjust text size without giving feedback
function adjustTextSize() {
    const userAnswer = document.getElementById('text-size-answer').value;
    const sample = document.querySelector('.text-sample');
    sample.style.fontSize = `${userAnswer}px`;
}

// Function to check if the text size is correct
function checkTextSize() {
    textSizeAttempts++;
    const userAnswer = document.getElementById('text-size-answer').value;
    const feedback = document.getElementById('text-feedback');

    if (userAnswer >= 14) {
        feedback.textContent = `Great! This size (${userAnswer}px) is comfortable for reading! It took you ${textSizeAttempts} tries.`;
    } else {
        feedback.textContent = `Try a bit larger size for better readability. Attempts: ${textSizeAttempts}`;
    }
}

document.getElementById('text-size-answer').addEventListener('input', adjustTextSize);

function checkContrast() {
    contrastAttempts++;
    const bgColor = document.getElementById('background-color').value;
    const textColor = document.getElementById('text-color').value;
    const sample = document.getElementById('contrast-sample');
    const feedback = document.getElementById('contrast-feedback');
    sample.style.backgroundColor = bgColor;
    sample.style.color = textColor;
    if (bgColor !== textColor) {
        feedback.textContent = `Well done! The contrast is good for readability. It took you ${contrastAttempts} tries.`;
    } else {
        feedback.textContent = `The text is not easily readable. Try different colors. Attempts: ${contrastAttempts}`;
    }
}
