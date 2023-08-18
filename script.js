let mario = document.querySelector('.mario')
let pipe = document.querySelector('.pipe')
let counter = document.querySelector('.counter')
let number = 0

function jump(){
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')
    },
       500 )



    
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <80){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`


        mario.src = 'images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'


        clearInterval(loop)


    }else {
        number++
        counter.innerHTML = number
        
    }

},10)

document.addEventListener('keydown', jump)

function newFunction(marioPosition) {
    console.log(marioPosition)
}
