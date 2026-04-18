const chaldeanChart = {
    'A': 1, 'I': 1, 'J': 1, 'Y': 1, 'Q': 1,
    'B': 2, 'K': 2, 'R': 2,
    'C': 3, 'G': 3, 'L': 3, 'S': 3,
    'D': 4, 'M': 4, 'T': 4,
    'E': 5, 'H': 5, 'N': 5, 'X': 5,
    'U': 6, 'V': 6, 'W': 6,
    'O': 7, 'Z': 7,
    'F': 8, 'P': 8
};

function calculateName() {
    const nameInput = document.getElementById('userName').value.toUpperCase();
    const resultDiv = document.getElementById('result');
    
    if (!nameInput) {
        resultDiv.innerHTML = "Please enter a name.";
        return;
    }

    let sum = 0;
    for (let char of nameInput) {
        if (chaldeanChart[char]) {
            sum += chaldeanChart[char];
        }
    }

    // Logic for single digit reduction
    let singleDigit = sum;
    while (singleDigit > 9) {
        singleDigit = String(singleDigit).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

    resultDiv.innerHTML = `
        <div style="color: #d4af37;">Compound Number: <strong>${sum}</strong></div>
        <div style="font-size: 2rem;">Destiny Number: <strong>${singleDigit}</strong></div>
    `;
}
