document.getElementById('calculate').addEventListener('click', calculateTax);

function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    
    if (isNaN(income)) {
        document.getElementById('result').textContent = "Please enter a valid income.";
    } else {
        const taxAmount = calculateIncomeTax(income);
        const result = `Your income tax is $${taxAmount.toFixed(2)}`;
        document.getElementById('result').textContent = result;
    }
}

function calculateIncomeTax(income) {
    // Define tax brackets and rates
    const brackets = [
        { min: 0, max: 10000, rate: 0.10 },
        { min: 10001, max: 50000, rate: 0.20 },
        { min: 50001, max: Infinity, rate: 0.30 }
    ];

    // Standard deduction
    const standardDeduction = 5000;

    // Apply standard deduction
    income -= standardDeduction;

    let totalTax = 0;

    for (const bracket of brackets) {
        if (income <= 0) break;

        const taxableIncomeInBracket = Math.min(bracket.max - bracket.min, income);
        const taxInBracket = taxableIncomeInBracket * bracket.rate;
        totalTax += taxInBracket;
        income -= taxableIncomeInBracket;
    }

    return totalTax;
}
