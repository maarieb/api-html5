var drag = document.querySelector('#drag')
var drop = document.querySelector('#drop')

drop.addEventListener('dragover', (event) => {event.preventDefault()})

drop.addEventListener('dragenter', (event) => {drop.style.backgroundColor = 'white'})

drop.addEventListener('dragleave', (event) => {drop.style.backgroundColor = 'dodgerblue'})

drag.addEventListener('dragstart', (event) => { event.dataTransfer.setData('text/plain', drag.innerHTML)})

drop.addEventListener('drop', (event) => { 
    const data = event.dataTransfer.getData('text/plain')
    drop.innerHTML = `${data} ${drop.innerHTML}`
    drop.style.backgroundColor = 'dodgerblue'
})