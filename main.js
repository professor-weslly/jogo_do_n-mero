  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const palpites = document.querySelector('.palpites');
    const ultimoResultado = document.querySelector('.ultimoResultado');
    const baixoOuAlto = document.querySelector('.baixoOuAlto');
    const envioPalpite = document.querySelector('.envioPalpite');
    const campoPalpite = document.querySelector('.campoPalpite');
    let contagemPalpites = 1;
    let botaoReiniciar;
