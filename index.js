const resultPanel = document.getElementById('result-panel');

document.getElementById('calculator-section').addEventListener('click', (e) => {
    e.stopPropagation();
    const target = e.target;
    if(target.classList.contains('number-flex-item') || target.classList.contains('operator-flex-item')) {
        if(target.innerHTML === 'C') {
            reset();
        } else if (target.innerHTML === '=') {
            equals();
        } else if(target.innerHTML === 'back') {
            back();
        } else {
            append(target.innerHTML);
        }
    }
});

const checkIfOperator = (ch) => {
    return (['+', '-', '*', '/'].includes(ch));
}

const getLastChar = (str) => {
    return str.charAt(str.length - 1)
}

const reset = () => {
    resultPanel.innerHTML = '0';
}

const equals = () => {
    const result = eval(resultPanel.innerHTML);
    resultPanel.innerHTML = result;
}

const append = (ch) => {
    if (resultPanel.innerHTML == 0 && !checkIfOperator(ch)) {
        if(ch === '.') {
            resultPanel.innerHTML = '0.'
        } else resultPanel.innerHTML = ch;
    } else {
        const resStr = resultPanel.innerHTML;
        const lastChar = getLastChar(resStr);
        if(checkIfOperator(lastChar) && checkIfOperator(ch)) return;
        else {
            resultPanel.innerHTML = resStr.concat(ch);
        }
    }
}

const back = () => {

}