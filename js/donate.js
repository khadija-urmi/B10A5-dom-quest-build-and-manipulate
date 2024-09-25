//modal box code
function openModal() {
    const modal = document.getElementById('modal_box');
    modal.showModal();
}
const closeButton = document.getElementById("closeButton");
goHomeButton.addEventListener("click", function () {
    window.location.href = "index.html";
});

function showErrorMessage(errorMsg, message) {
    errorMsg.innerText = message;
    errorMsg.style.display = "block"; // Show the error message
}
document.querySelectorAll(".donate-now").forEach(button => {
    button.addEventListener("click", function (event) {

        const card = event.target.closest(".card");
        // Get the current donation 
        const currentDonateElement = card.querySelector(".donate-amount");
        const currentDonation = parseFloat(currentDonateElement.innerText);

        //show error msg
        const errorMsgDiv = card.querySelector('#error-msg');
        // Hide the error message initially
        errorMsgDiv.style.display = "none";
        errorMsgDiv.innerText = "";

        //get donation input 
        const donateAmountInputValue = card.querySelector(".donate-input").value;

        const donateAmountInput = parseFloat(donateAmountInputValue);
        if (donateAmountInputValue === "") {
            showErrorMessage(errorMsgDiv, "⚠️ Donation amount must be filled out");
            return;
        }

        //get the current balance
        const currentBalanceElement = document.getElementById("balance");
        const currentBalance = parseFloat(currentBalanceElement.innerText);
        const remainingBalance = currentBalance - donateAmountInput;


        //input validation
        if (donateAmountInput <= 0 || isNaN(donateAmountInput)) {
            showErrorMessage(errorMsgDiv, "⚠️ Please enter a valid donation amount");
            return;
        }
        else if (donateAmountInput > currentBalance || remainingBalance < 0) {
            showErrorMessage(errorMsgDiv, "⚠️ Donation amount exceeds the current balance.");
            return;
        }

        const totalDonation = currentDonation + donateAmountInput;
        currentDonateElement.innerText = totalDonation.toFixed(2);
        currentBalanceElement.innerText = remainingBalance.toFixed(2);

        //adding  history list 
        const historyItem = document.createElement("div");
        historyItem.className = "bg-green-200 p-8 rounded-md border border-gray-200 shadow-md space-y-2";
        const newDate = new Date().toLocaleDateString();
        const donationName = card.querySelector(".donation-title").innerText;

        historyItem.innerHTML = `
        <h2 class="text-2xl font-semibold">${donateAmountInput.toLocaleString()} Taka is Donated at  ${donationName}</h2>
        <p class="text-lg text-gray-500">Date: ${newDate} (Bangladesh Standard Time)</p>
    `;
        const historyContainer = document.getElementById("history-list");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        document.getElementById("history-section").classList.add("hidden");

    })
})
//donation-btn & history-btn functionality active status
function toggleButtonStatus(activeButton, inactiveButton, activeSection, inactiveSection) {

    activeButton.classList.add("bg-lime-300", "text-black");
    activeButton.classList.remove("bg-white", "text-gray-500");

    inactiveButton.classList.add("bg-white", "text-gray-500");
    inactiveButton.classList.remove("bg-lime-300", "text-black");

    activeSection.classList.remove("hidden");
    inactiveSection.classList.add("hidden");
}

const donationButton = document.getElementById("donation-btn");
const historyButton = document.getElementById("history-btn");

const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

historyButton.addEventListener('click', function () {
    toggleButtonStatus(historyButton, donationButton, historySection, donationSection);
})

donationButton.addEventListener('click', function () {
    toggleButtonStatus(donationButton, historyButton, donationSection, historySection);
})

