function showBudget() {

    const budgetInput = document.getElementById("budgetInput").value;

    

    const expNameInput = document.getElementById("expNameInput").value;

    const expNameOutput = document.getElementById('exp_name');
    expNameOutput.innerHTML = expNameInput;
    

    const expAmountInput = document.getElementById("expAmountInput").value;

    const expAmountOutput = document.getElementById('exp_amount');
    expAmountOutput.innerHTML = expAmountInput;
    

    console.log(budgetInput);
    console.log(expNameInput);
    
}
