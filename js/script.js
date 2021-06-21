// // console.log('HEllo')

// // const timer = () => {
// //     console.log('timer starting')
// // }

// // setTimeout(timer, 2000)

// // const greeting = (name, phrase) => {
// //     console.log(`${name} ${phrase}`)
// // }


// // const timer = setTimeout(() => {
// //     greeting('John', 'bye')
// // }, 1000)


// // let text = prompt('name')

// // if (text == 'John') {
// // } else {
// //     clearInterval(timer)
// // }

// // const timerId = setTimeout(() => {
// //     console.log('It\'s a Timer')
// // }, 500)

// // clearInterval(timerId)

// //=========================================
// // let i = 0

// // let timerId = setInterval(() => {
// //     console.log(i)
// //     i++
// //     i == 10 ? clearInterval(timerId) : null
// // }, 500)
// //=========================================


// // const btn = document.getElementById('btn')

// // let timerId, i = 0

// // const logger = () => {
// //     if (i === 10) clearInterval(timerId)
// //     console.log(i)
// //     i++
// // }

// // btn.addEventListener('click', () => {
// //     timerId = setInterval(logger, 500)
// // })

// //============================================

const div = document.getElementById('cube')

const step = document.getElementById('step')
const stop = document.getElementById('stop')
const spin = document.getElementById('spin')

let left = 0
let mtop = 0
let rotate = 0
let anim, anim2
let allWidth = document.body.clientWidth - 210

stop.addEventListener('click', () => {
    clearInterval(anim)
    clearInterval(anim2)
})

spin.addEventListener('click', () => {
    anim2 = setInterval(() => {
        div.style.transform = 'rotate(' + rotate + 'deg)'
        rotate += 15
    }, 100)
})

step.addEventListener('click', () => {
    anim = setInterval(() => {
        if (left == 0 && mtop <= 550 && mtop > 0) {
            mtop = mtop - 10
            div.style.top = mtop + 'px'
        }
        else if (left <= 650 && mtop == 550) {
            left = left - 10
            div.style.left = left + 'px'
        }
        else if (mtop >= 0 && mtop <= 540 && left >= 640) {
            div.style.top = mtop + 'px'
            mtop = mtop + 10
        }
        else if (left >= 0 && mtop == 0 && left <= 650) {
            div.style.left = left + 'px'
            left = left + 10
        }
    }, 10)
})

//=======================================================

// //TIMER

// const deadLine = '2021-06-17'

// const getTimeRemaining = (endtime) => {
//     const t = Date.parse(endtime) - Date.parse(new Date())
//     const days = Math.floor(t / (1000 * 60 * 60 * 24))
//     const hours = Math.floor((t / (1000 * 60 * 60) % 24))
//     const minutes = Math.floor((t / 1000 / 60) % 60)
//     const seconds = Math.floor((t / 1000) % 60)

//     return {
//         total: t,
//         days: days,
//         hours: hours,
//         minutes: minutes,
//         seconds: seconds
//     }
// }

// const getZero = (num) => {
//     if (num >= 0 && num < 10) {
//         return '0' + num
//     } else {
//         return num
//     }
// }

// const setClock = (selector, endtime) => {
//     const timer = document.getElementById(selector)
//     const days = document.getElementById('days')
//     const hours = document.getElementById('hours')
//     const minutes = document.getElementById('minutes')
//     const seconds = document.getElementById('seconds')
//     const timerInterval = setInterval(updateClock, 1000)

//     updateClock()

//     function updateClock() {
//         const t = getTimeRemaining(endtime)

//         days.innerHTML = getZero(t.days)
//         hours.innerHTML = getZero(t.hours)
//         minutes.innerHTML = getZero(t.minutes)
//         seconds.innerHTML = getZero(t.seconds)

//         if (t.total <= 0) {
//             clearInterval(timerInterval)
//         }
//     }
// }
// setClock('timer__blocks', deadLine)