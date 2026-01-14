const allBtn = document.querySelectorAll('button');

function handleClick(evt) {
  if(evt.type==='keydown'){
    console.log(evt.key)
  }else{
    console.log(evt.type)
  }
}

for (let i=0; i<allBtn.length; i++) {
  allBtn[i].addEventListener('click', handleClick);
}

document.querySelector('body').addEventListener('keydown', handleClick);
