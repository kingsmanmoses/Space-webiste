let display = document.querySelector('.read-more');
let text = document.querySelector('.text-display');
display.addEventListener('click',(e)=>{
    e.preventDefault()
    if (text.style.display === 'none') {
        text.style.display = 'block'
        display.innerHTML = 'Read Less'

    }else{
        text.style.display = 'none'
        display.innerHTML = 'Read More'
    }

})