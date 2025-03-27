document.getElementById('checknumber').addEventListener('click', function() {
    let number = parseInt(document.getElementById("numberInput").value);
    let outputDiv = document.getElementById("output");

    if (isNaN(number)) {
        outputDiv.textContent = "Please enter a valid number.";
        return;
    }

    if (number % 4 === 0 && number % 6 === 0) {
        outputDiv.textContent = "PopSnap";
    } else if (number % 4 === 0) {
        outputDiv.textContent = "Pop";
    } else if (number % 6 === 0) {
        outputDiv.textContent = "Snap";
    } else {
        outputDiv.textContent = number;
    }
});
