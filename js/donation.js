
document.querySelectorAll(".donate-now").forEach(button => {
    button.addEventListener("click", function (event) {
        const card = event.target.closest(".card");

        // Get the current donation element and its value
        const currentDonateElement = card.querySelector(".donate-amount");
        const currentDonation = parseFloat(currentDonateElement.innerText);

        //get total donation
        const donateAmountInput = parseFloat(card.querySelector(".donate-input").value);

        //input validation
        if (isNaN(donateAmountInput) || donateAmountInput <= 0) {
            alert("Please enter a valid donation amount");
            return;
        }
        const totalDonation = currentDonation + donateAmountInput;
        //currentDonateElement.innerText = totalDonation.toFixed(2);

        //get the current balance
        const currentBalanceElement = document.getElementById("balance");
        const currentBalance = parseFloat(currentBalanceElement.innerText);
        const remainingBalance = currentBalance - donateAmountInput;
        console.log(remainingBalance);
        //currentBalanceElement.innerText = remainingBalance.toFixed(2);
        //input validation
        if (isNaN(donateAmountInput) || donateAmountInput <= 0) {
            alert("Please enter a valid donation amount");
            return;
        }
        if (donateAmountInput > remainingBalance) {
            alert("Donation amount exceeds the current balance. ");
            return;
        }
        //set value in webpage
        currentDonateElement.innerText = totalDonation.toFixed(2);
        currentBalanceElement.innerText = remainingBalance.toFixed(2)

    });
});

