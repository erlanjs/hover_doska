const board = document.querySelector('#board')

button = document.querySelector('button')
button1 = document.querySelector('.btn1')

const squaresNumber = 1500

const color = ['red' , 'green' , 'blue', 'Bisque' , 'BlueViolet', 'Chartreuse']

for (let i = 0 ; i < squaresNumber ; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover' , () => {
        setColor(square)
    })

    square.addEventListener('mouseleave' , () => {
        removeColor(square)
    })

    button.addEventListener('click' , () => {
        srith(square)
    })

    button1.addEventListener('click' , () => {
        off(square)
    })

    board.append(square)
}

button.addEventListener('click' , () => {
    getRandomColor(square)
})

function setColor(item){
    const color = getRandomColor()
    item.style.backgroundColor = color
    item.style.boxShadow = `0 0 10px ${color}`
}

function getRandomColor(){
    const index = Math.floor(Math.random()* color.length)
    return color[index]
}

function removeColor(item){
    item.style.backgroundColor = '#1d1d1d'
    item.style.boxShadow = '0 0 10px #1d1d1d '
}



function off(item){
    item.style.backgroundColor = '#1d1d1d'
    item.style.boxShadow = '0 0 10px #1d1d1d '
}


function srith(item){
    const color = getRandomColor()
    item.style.backgroundColor = color
    item.style.boxShadow = `0 0 10px ${color}`
}
