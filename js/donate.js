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
    })
})
//donation-btn & history-btn functionality active status
function toggleButtonStatus(activeButton, inactiveButton) {

    activeButton.classList.add("bg-lime-300", "text-black");
    activeButton.classList.remove("bg-white", "text-gray-500");

    inactiveButton.classList.add("bg-white", "text-gray-500");
    inactiveButton.classList.remove("bg-lime-300", "text-black");
}

const donationButton = document.getElementById("donation-btn");
const historyButton = document.getElementById("history-btn");

historyButton.addEventListener('click', function () {
    toggleButtonStatus(historyButton, donationButton);
})

donationButton.addEventListener('click', function () {
    toggleButtonStatus(donationButton, historyButton);
})

