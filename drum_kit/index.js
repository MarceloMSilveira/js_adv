const allBtn = document.querySelectorAll('button');
const conjuntoDeLetras = ['w','a','s','d','j','k','l']


function tocarSomEfazerAnimacao(letra) {
  //tocar som
  switch (letra) {
    case 'w':
      const tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      const tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      const tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      const tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      const snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      const crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      const kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log("Tecla sem som configurado: " + letra);
      break;
  }
  //fazer animação
  const btnSelector = `button.${letra}`;
  const btn = document.querySelector(btnSelector);
  btn.classList.add('pressed');
  setTimeout(()=>btn.classList.remove('pressed'),100)
}


function handleEvent(evt) {
  if(evt.type==='keydown' && conjuntoDeLetras.includes(evt.key)){
    tocarSomEfazerAnimacao(evt.key)
  }else if(evt.type==='click'){
    const btnClicado = evt.target;
    const letraEscolhida = btnClicado.textContent;
    tocarSomEfazerAnimacao(letraEscolhida)
  }
}

for (let i=0; i<allBtn.length; i++) {
  allBtn[i].addEventListener('click', handleEvent);
}

document.querySelector('body').addEventListener('keydown', handleEvent);
