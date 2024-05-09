const cardNumberEl = document.getElementById("card-number");
const cardNumberElValueCopy = cardNumberEl.textContent;
const inputCardNumberEl = document.getElementById("input-card-number");
const inputCardNumberContainer = document.getElementById("input-card-number-undertext");

const cardNameEl = document.getElementById("person-name");
const cardNameElValueCopy = cardNameEl.textContent;
const inputCardNameEl = document.getElementById("input-name");
const inputCardNameContainer = document.getElementById("input-card-name-undertext");

const cardCvcEl = document.getElementById("cvc");
const cardCvcValueCopy = cardCvcEl.textContent;
const inputCardCvcEl = document.getElementById("input-cvc");
const inputCardCvcContainer = document.getElementById("input-card-cvc-undertext");

const cardDoeLeftEl = document.getElementById("doe-1");
const cardDoeLeftValueCopy = cardDoeLeftEl.textContent;
const cardDoeRightEl = document.getElementById("doe-2");
const cardDoeRightValueCopy = cardDoeRightEl.textContent;
const inputCardMonthDoeEl = document.getElementById("input-month");
const inputCardMonthContainer = document.getElementById("input-card-month-undertext");
const inputCardYearDoeEl = document.getElementById("input-year");
const inputCardYearContainer = document.getElementById("input-card-year-undertext");

const numberCheck = /[0-9]/;
const lattersCheck = /[a-zA-z]/;

function renderCardInfo(infoSourceEl, cardTargetEl, defaultValue, expectedType, inputWarningEl) {
    checkInputUsability(infoSourceEl, expectedType, inputWarningEl);  
    if (infoSourceEl.value.trim().length === 0) {
        cardTargetEl.textContent = defaultValue;
        inputWarningEl.textContent = `Can't be blank!`;
        sourceInput.style.borderColor = `red`;
    } else {
        let cardSourceInputValue = infoSourceEl.value;
        cardTargetEl.textContent = cardSourceInputValue;
    }
}

function checkInputUsability(sourceInput, neededType, errorWarningEl) {
    let cleanedValue = sourceInput.value.replace(/\s+/g, '');
    if (neededType === "string") {
        if (isNaN(Number(cleanedValue)) === false) {
            errorWarningEl.textContent = `Wrong format, text only`;
            sourceInput.style.borderColor = `red`;
        } else if (numberCheck.test(cleanedValue) === true){
            errorWarningEl.textContent = `Wrong format, text only`;
            sourceInput.style.borderColor = `red`;
        } else {
            errorWarningEl.textContent = ``;
        }
    } else if (neededType === "int") {
        if (isNaN(Number(cleanedValue)) === true) {
            errorWarningEl.textContent = `Wrong format, numbers only`;
            sourceInput.style.borderColor = `red`;
        } else {
            errorWarningEl.textContent = ``;
        }
    }
}

inputCardNumberEl.addEventListener("blur", () => renderCardInfo(inputCardNumberEl, cardNumberEl, cardNumberElValueCopy, "int", inputCardNumberContainer));
inputCardNameEl.addEventListener("blur", () => renderCardInfo(inputCardNameEl, cardNameEl, cardNameElValueCopy, "string", inputCardNameContainer));
inputCardCvcEl.addEventListener("blur", () => renderCardInfo(inputCardCvcEl, cardCvcEl, cardCvcValueCopy, "int", inputCardCvcContainer));
inputCardMonthDoeEl.addEventListener("blur", () => renderCardInfo(inputCardMonthDoeEl, cardDoeLeftEl, cardDoeLeftValueCopy, "int", inputCardMonthContainer));
inputCardYearDoeEl.addEventListener("blur", () => renderCardInfo(inputCardYearDoeEl, cardDoeRightEl, cardDoeRightValueCopy, "int", inputCardYearContainer));