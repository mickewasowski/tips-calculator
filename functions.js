function selectPercentage() {
    let currentBtn = event.target;

    let parent = Array.from(document.getElementById('percentage-btns').children);

    let isClicked = parent.find(x => x.id !== '');

    if (isClicked === undefined) {
        currentBtn.id = "selected-btn";
    } else if (isClicked !== undefined) {
        isClicked.id = '';
        currentBtn.id = "selected-btn";
    }

    let percentTipText = currentBtn.innerText;
    let percentNumber = parseFloat(percentTipText) / 100;

    let bill = parseFloat(document.getElementById('bill').value);
    let peopleCount = parseInt(document.getElementById('people-count').value);

    let totalTip = bill * percentNumber;

    let tipPerPerson = (totalTip / peopleCount).toFixed(2);

    let perPersonBill = ((bill / peopleCount) + (totalTip / peopleCount)).toFixed(2);

    let tipField = document.getElementById('tip-amount-person');
    let totalField = document.getElementById('total-per-person');

    tipField.innerHTML = tipPerPerson;
    totalField.innerHTML = perPersonBill;
}


function checkPeopleCount() {
    let peopleCount = Number(event.target.value);

    let errorLabel = document.getElementById('error-label');
    let parent = document.getElementById('people-container').children;

    let peopleContainer = parent[2];

    if (peopleCount <= 0) {
        errorLabel.style.display = 'initial';
        peopleContainer.classList.add('error');
    } else {
        errorLabel.style.display = 'none';
        peopleContainer.classList.remove('error');
    }
}
