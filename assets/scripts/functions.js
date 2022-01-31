let valor = '0';
let isNewNumber = true;
valorAnterior = 0;
operacaoPendente = null;


function atualizaVisor () {
    let [parteInteira, parteDecimal] = valor.split(',');
    let v = '';
    c = 0
    for (let i = parteInteira.length -1; i >= 0; i--) {
        if (++c > 3) {
            v = '.'+v;
            c = 1;
        }
        v = parteInteira[i] + v;
    }

    v = v +(parteDecimal ? ',' + parteDecimal : '');

    if (valor.length > 12) {
        document.querySelector('.section-area-calc-result p').innerText = v.slice(0, 13)+'...';
        return;
    }
    else {
        document.querySelector('.section-area-calc-result p').innerText = v;
    }
    
};

function passNumber (n) {
    if (isNewNumber) {
        valor = '' + n;
        isNewNumber = false;
        atualizaVisor();
    }

    else if (valor.length < 12) {
        valor += n;
        atualizaVisor();
    }
};

function passPoint(n) {
    if (valor.indexOf(',') == -1) {
        valor = valor + n;
        atualizaVisor();
    }

    else {
        atualizaVisor();
    }
}



function backspace() {
    if (valor.length == 1) {
        valor = '0';
        atualizaVisor();
        isNewNumber = true 
    }

    else {
        back = valor.slice(0, valor.length -1);   
        valor = back;
        atualizaVisor();
    }
};

const valorAtual = () => parseFloat(valor.replace(',', '.'));

function passOp(op) {
    calcular();
    valorAnterior = valorAtual()
    operacaoPendente = op;
    isNewNumber = true;
    atualizaVisor();
};

const calcular = () => {
    if (operacaoPendente != null) {
    let resultado;
    switch (operacaoPendente) {
        case '+': resultado = valorAnterior + valorAtual();
        break;
        case '-': resultado = valorAnterior - valorAtual();
        break;
        case 'X': resultado = valorAnterior * valorAtual();
        break;
        case '/': resultado = valorAnterior / valorAtual();
         break;
    }

    valor = resultado.toString().replace('.', ',');
    }

    isNewNumber = true;
    operacaoPendente = null;
    valorAnterior = 0;
    atualizaVisor();
};

function clearDisplay() {
    isNewNumber = true;
    valor = '0'
    atualizaVisor();
    valorAnterior = 0;
    operacaoPendente = null;
}


