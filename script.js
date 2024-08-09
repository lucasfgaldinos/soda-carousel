let list = document.querySelectorAll('.item')
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')

let count = list.length
let active = 0

prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active == 0 ? count -1 : active - 1
    list[active].classList.add('active')
}

next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count -1 ? 0 : active + 1
    list[active].classList.add('active')
}