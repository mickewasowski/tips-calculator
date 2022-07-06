function selectPercentage() {
    let currentBtn = event.target;

    let bill = parseFloat(document.getElementById('bill').value);
    let peopleCount = parseInt(document.getElementById('people-count').value);

    if (isNaN(bill)) {
        return;
    }
    if (isNaN(peopleCount)) {
        let errorLabel = document.getElementById('error-label');
        let parent = document.getElementById('people-container').children;
        let peopleContainer = parent[2];

        errorLabel.style.display = 'initial';
        peopleContainer.classList.add('error');

        return;
    }

    let parent = Array.from(document.getElementById('percentage-btns').children);

    let isClicked = parent.find(x => x.id !== '');

    if (isClicked === undefined && currentBtn.tagName !== 'INPUT') {
        currentBtn.id = "selected-btn";
        let inputField = document.getElementsByClassName('input-percent')[0];
        inputField.classList.remove('selected-input');
        inputField.value = '';
    } else if (isClicked !== undefined && currentBtn.tagName !== 'INPUT') {
        isClicked.id = '';
        currentBtn.id = "selected-btn";
    } else if (isClicked === undefined && currentBtn.tagName === 'INPUT') {
        currentBtn.classList.add('selected-input');
    }
    else if (isClicked !== undefined && currentBtn.tagName === 'INPUT') {
        isClicked.id = '';
        currentBtn.classList.add('selected-input');
    }


    let percentTipText = "";
    if (currentBtn.tagName === 'INPUT') {
        percentTipText = currentBtn.value;
    } else {
        percentTipText = currentBtn.innerText;
    }

    let percentNumber = parseFloat(percentTipText) / 100;

    let totalTip = bill * percentNumber;

    let tipPerPerson = (totalTip / peopleCount).toFixed(2);

    let perPersonBill = ((bill / peopleCount) + (totalTip / peopleCount)).toFixed(2);

    let tipField = document.getElementById('tip-amount-person');
    let totalField = document.getElementById('total-per-person');

    tipField.innerHTML = `$ ${tipPerPerson}`;
    totalField.innerHTML = `$ ${perPersonBill}`;
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

function resetForm() {
    let parent = Array.from(document.getElementById('percentage-btns').children);
    let percent = parent.find(x => x.id === 'selected-btn');

    if (percent) {
        percent.id = '';
    } else {
        let inputPercent = document.getElementsByClassName('input-percent')[0];
        inputPercent.value = '';
        inputPercent.classList.remove('selected-input');
    }

    let billField = document.getElementById('bill');
    billField.value = '';

    let peopleCountField = document.getElementById('people-count');
    peopleCountField.value = '';

    let tipAmountPerson = document.getElementById('tip-amount-person');
    tipAmountPerson.innerHTML = '$ 0.00';

    let totalAmountPerson = document.getElementById('total-per-person');
    totalAmountPerson.innerHTML = '$ 0.00';
}