// Palindrome Check
function checkPalindrome() {
    const str = document.getElementById('palindromeInput').value.toLowerCase().replace(/\s/g, '');
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            document.getElementById('palindromeResult').innerText = "Not a palindrome";
            return;
        }
    }
    document.getElementById('palindromeResult').innerText = "Palindrome";
}

// Minimum and Maximum Numbers
function findMinMax() {
    const numbers = document.getElementById('numbersInput').value.split(',').map(num => parseInt(num.trim()));
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    document.getElementById('minMaxResult').innerText = `Minimum: ${min}, Maximum: ${max}`;
}

// Missing Number Identification
function findMissingNumber() {
    const series = [11, 12, 14, 15, 16, 18, 19, 20];
    let missingNumber = null;
    for (let i = 0; i < series.length - 1; i++) {
        if (series[i + 1] - series[i] !== 1) {
            missingNumber = series[i] + 1;
            break;
        }
    }
    document.getElementById('missingNumberResult').innerText = `Missing Number: ${missingNumber}`;
}
