
// alert('welcome')

// let font = document.querySelector('.fa-bars')
// font.addEventListener('click', runFunction)
// function runFunction(){
//   list.classList.toggle('dave')
// }
// let list = document.querySelector('ul')

let toogle = document.querySelector('.toogle')
let list = document.querySelector('.list')
function runFunction(){
  list.classList.toggle('dave')
}
toogle.addEventListener('click', runFunction)
