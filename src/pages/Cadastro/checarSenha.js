
export const checarSenha = () => {
    const senha = new String(document.getElementById('password').value)
    const imprimeForca = document.getElementById('strongPass')
    const maiusculas = new RegExp('[A-Z]')
    const minusculas = new RegExp('[a-z]')
    const numeros = new RegExp('[0-9]')
    const caracteresEspeciais = new RegExp('[-++!@#$%^&*.,?]')
    let forca=0
    if(senha.length>=5 || senha.length>=10){ forca+=5}
    if(senha.length>10 || senha.length>=15) {forca+=10}
    if(senha.length>15 || senha.length>=20) {forca+=15}
    if(senha.length>25) {forca+=20}

    if ((minusculas.test(senha) || maiusculas.test(senha)) && !(minusculas.test(senha) && maiusculas.test(senha))) {forca+=5}

    if(minusculas.test(senha) && maiusculas.test(senha)) {forca+=10}

    if (caracteresEspeciais.test(senha)) {forca+=20}

    if (forca<10) {
        imprimeForca.innerHTML='Muito fraca'
    }
    if (forca>=10 && forca<20) {
        imprimeForca.innerHTML='Fraca'
    }
    if (forca>=20 && forca<30) {
        imprimeForca.innerHTML='Regular'
    }
    if (forca>=30 && forca<40) {
        imprimeForca.innerHTML='Forte'
    }
    if (forca>=40) {
        imprimeForca.innerHTML='Excelente'
    }
}