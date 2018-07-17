const btn = document.querySelector('#btn-bar')
const nav= document.querySelector('#nav')

let flat = false

btn.addEventListener('click', () =>{
    if(!flat) {
        nav.classList.add('slider')
        flat = true
    }else{
        nav.classList.remove('slider')
        flat = false
    }
})
