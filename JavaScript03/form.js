
document.querySelector('form').addEventListener("click", nome);
function nome() {
    
    const campoNome = document.querySelector('#nome');
    const capturaNome = campoNome.value;
    function validaNome() {
        const nv = /^[a-z]/i;
        return nv.test(capturaNome);
    }

    let capturaFuncaoValidaNome = validaNome(capturaNome);
    console.log(capturaFuncaoValidaNome);
    if (capturaFuncaoValidaNome === true) {
        document.querySelector('.errorNome').innerHTML = "";
    } else {
        document.querySelector('.errorNome').innerHTML = "Não insira números no seu nome.";
    }
    console.log(capturaFuncaoValidaNome);
}


document.querySelector('form').addEventListener("click", email);
function email() {
    
    const camposEmail = document.querySelector('#email');
    const capturaEmail = camposEmail.value;
    function validaEmail() {
        const ev = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        return ev.test(capturaEmail);
    }

    let capturaFuncaoValidaEmail = validaEmail(capturaEmail);
    console.log(capturaFuncaoValidaEmail);
    if (capturaFuncaoValidaEmail === true) {
        document.querySelector('.errorEmail').innerHTML = "";
    } else {
        document.querySelector('.errorEmail').innerHTML = "Verifique se o email é válido! example@example.com";
    }
    console.log(capturaFuncaoValidaEmail);
}


document.querySelector('form').addEventListener("click", contato);
function contato() {
    
    const campoContato = document.querySelector('#contato');
    const capturaContato = campoContato.value;
    function validaContato() {
        const cont = /^[0-9]{2}-[0-9]{5}-[0-9]{4}$/;
        return cont.test(capturaContato);
    }

    let capturaFuncaoValidaContato = validaContato(capturaContato);
    console.log(capturaFuncaoValidaContato);
    if (capturaFuncaoValidaContato === true) {
        document.querySelector('.errorContato').innerHTML = "";
    } else {
        document.querySelector('.errorContato').innerHTML = "Verifique se o contato é válido! (xx)xxxxx-xxxx";
    }
    console.log(capturaFuncaoValidaContato);
}

document.querySelector('form').addEventListener("click", cep);
function cep() {

    const campoCEP = document.querySelector('#cep');
    const capturaCEP = campoCEP.value;
    function validaCEP() {
        const ccep = /^[0-9]{5}-[0-9]{3}$/;
        return ccep.test(capturaCEP);
    }

    let capturaFuncaoCEP = validaCEP(capturaCEP);
    console.log(capturaFuncaoCEP);
    if (capturaFuncaoCEP === true) {
        document.querySelector('.errorCEP').innerHTML = "";
    }else {
        document.querySelector('.errorCEP').innerHTML = "Verifique se o CEP é válido! (xxxxx-xxx)";
    }
    console.log(capturaFuncaoCEP);
}

document.querySelector('form').addEventListener("click", cidade);
function cidade() {
    
    const campoCidade = document.querySelector('#cidade');
    const capturaCidade = campoCidade.value;
    function validaCidade() {
        const cid = /^[a-z]/i;
        return cid.test(capturaCidade);
    }

    let capturaFuncaoValidaCidade = validaCidade(capturaCidade);
    console.log(capturaFuncaoValidaCidade);
    if (capturaFuncaoValidaCidade === true) {
        document.querySelector('.errorCidade').innerHTML = "";
    } else {
        document.querySelector('.errorCidade').innerHTML = "Não insira números no nome da cidade.";
    }
    console.log(capturaFuncaoValidaCidade);
}

document.querySelector('form').addEventListener("click", estado);
function estado() {

    const campoUF = document.querySelector('#uf');
    const capturaUF = campoUF.value;
    function validaCEP() {
        const est = /A[CLMP]|BA|CE|ES|M[AGST]|P[ABEIR]|R[JNORS]|S[CEP]|[GT]O/i;
        return est.test(capturaUF);
    }

    let capturaFuncaoUF = validaCEP(capturaUF);
    console.log(capturaFuncaoUF);
    if (capturaFuncaoUF === true) {
        document.querySelector('.errorUF').innerHTML = "";
    }else {
        document.querySelector('.errorUF').innerHTML = "Verifique se a UF é válida! Exemplo: PE";
    }
    console.log(capturaFuncaoUF);
}

document.querySelector("form").addEventListener('submit', envia);
    function envia() {
        envia.preventDefault();
    }
