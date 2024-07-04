
function calculateSum() {

    let inputString = document.getElementById('numberInput').value;

    let numberStrings = inputString.split(',');

    let sum = numberStrings.reduce((total, numStr) => {
        let number = parseFloat(numStr.trim());
        return total + (isNaN(number) ? 0 : number);
    }, 0);

    document.getElementById('result').textContent = "Sum: " + sum;

}
