const resultPanel = document.getElementById('result-panel');
let isResult = false;

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
    isResult=false;
}

const equals = () => {
    const result = eval(resultPanel.innerHTML);
    resultPanel.innerHTML = result;
    isResult = true;
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
    isResult=false;
}

const back = () => {
    if(!isResult) {
        const resStr = resultPanel.innerHTML;
        resultPanel.innerHTML = resStr.substring(0, resStr.length - 1);
        if(resultPanel.innerHTML.length === 0) resultPanel.innerHTML = 0;
    }
}