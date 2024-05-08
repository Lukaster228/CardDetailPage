const cardNumberEl = document.getElementById("card-number");
const cardNumberElValueCopy = cardNumberEl.textContent;
const inputCardNumberEl = document.getElementById("input-card-number");

const cardNameEl = document.getElementById("person-name");
const cardNameElValueCopy = cardNameEl.textContent;
const inputCardNameEl = document.getElementById("input-name");

const cardCvcEl = document.getElementById("cvc");
const cardCvcValueCopy = cardCvcEl.textContent;
const inputCardCvcEl = document.getElementById("input-cvc");

const cardDoeLeftEl = document.getElementById("doe-1");
const cardDoeLeftValueCopy = cardDoeLeftEl.textContent;
const cardDoeRightEl = document.getElementById("doe-2");
const cardDoeRightValueCopy = cardDoeRightEl.textContent;
const inputCardMonthDoeEl = document.getElementById("input-month");
const inputCardYearDoeEl = document.getElementById("input-year");

function renderCardInfo(infoSourceEl, cardTargetEl, defaultValue) {
    console.log(defaultValue);  
    if (infoSourceEl.value.trim().length === 0) {
        cardTargetEl.textContent = defaultValue;
    } else {
        let cardSourceInputValue = infoSourceEl.value;
        cardTargetEl.textContent = cardSourceInputValue;
    }
}

inputCardNumberEl.addEventListener("blur", () => renderCardInfo(inputCardNumberEl, cardNumberEl, cardNumberElValueCopy));
inputCardNameEl.addEventListener("blur", () => renderCardInfo(inputCardNameEl, cardNameEl, cardNameElValueCopy));
inputCardCvcEl.addEventListener("blur", () => renderCardInfo(inputCardCvcEl, cardCvcEl, cardCvcValueCopy));
inputCardMonthDoeEl.addEventListener("blur", () => renderCardInfo(inputCardMonthDoeEl, cardDoeLeftEl, cardDoeLeftValueCopy));
inputCardYearDoeEl.addEventListener("blur", () => renderCardInfo(inputCardYearDoeEl, cardDoeRightEl, cardDoeRightValueCopy));