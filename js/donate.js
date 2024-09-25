document.querySelectorAll(".donate-now").forEach(button => {
    button.addEventListener("click", function (event) {

        const card = event.target.closest(".card");
        // Get the current donation 
        const currentDonateElement = card.querySelector(".donate-amount");
        const currentDonation = parseFloat(currentDonateElement.innerText);

        //get doantion input 
        const donateAmountInput = parseFloat(card.querySelector(".donate-input").value);
        console.log(donateAmountInput);

        //get the current balance
        const currentBalanceElement = document.getElementById("balance");
        const currentBalance = parseFloat(currentBalanceElement.innerText);
        const remainingBalance = currentBalance - donateAmountInput;


        //input validation
        if (donateAmountInput <= 0 || isNaN(donateAmountInput)) {
            alert("Please enter a valid donation amount");
            return;
        }
        else if (donateAmountInput > currentBalance || remainingBalance < 0) {
            alert("Donation amount exceeds the current balance.");
            return;
        }
        const totalDonation = currentDonation + donateAmountInput;
        currentDonateElement.innerText = totalDonation.toFixed(2);
        currentBalanceElement.innerText = remainingBalance.toFixed(2);
    })
})