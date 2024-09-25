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