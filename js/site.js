function getBuzz() {
    let startValue = 0;
    let endValue = 100;

    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumber(startValue, endValue);

        displayNumbers(numbers)
    } else {

    }
}


function generateNumber(startValue, endValue) {
    let numbers = [];
    for (let index = startValue; index <= endValue; index++) {
        numbers.push(index);
    }
    return numbers;
}


function displayNumbers(numbers) {
    let startValue = numbers[0];
    let endIndex = numbers.length;
    let tableBody = document.getElementById("results");

    tableBody.innerHTML = "";



    for (let index = 1; index < endIndex; index++) {
        let number = numbers[index];
        if (number % 15 == 0) {
            tableRow = `<tr><td>FizzBuzz</td></tr>`;
        } else if (number % 3 == 0) {
            tableRow = `<tr><td>Fizz</td></tr>`;
        } else if (number % 5 == 0) {
            tableRow = `<tr><td>Buzz</td></tr>`;
        } else {
            tableRow = `<tr><td>${number}</td></tr>`;
        }

        tableBody.innerHTML += tableRow;
    }
}

function displayData(fbData) {

    //get the table body element form the page
    let tableBody = document.getElementById("results");

    //get the template to make the table
    let rowTemplate = document.getElementById("fbTemplate");

    tableBody.innerHTML = "";

    for (let index = 1; index < number.length; index += 5) {
        const tableRow = document.importNode(rowTemplate.content, true);

        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[index]);
        rowCols[0].textContext = fbData[index];

        rowCols[0].classList.add(fbData[index+1]);
        rowCols[0].textContext = fbData[index+1];

        rowCols[0].classList.add(fbData[index+2]);
        rowCols[0].textContext = fbData[index+2];

        rowCols[0].classList.add(fbData[index+3]);
        rowCols[0].textContext = fbData[index+3];

        rowCols[0].classList.add(fbData[index+4]);
        rowCols[0].textContext = fbData[index+4];

        tableBody.appendChild(tableRow);
    }
}