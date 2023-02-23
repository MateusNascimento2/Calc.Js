export default function calculate() {
    const resultInput = document.getElementById('result');
    try{
        const result = eval(input.value)
        resultInput.value = result
        resultInput.classList.remove('error');
    }
    catch {
        resultInput.value = 'ERROR'
        resultInput.classList.add('error');
    }
}