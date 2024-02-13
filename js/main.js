'use strict'

function onBallClick(elBall) {
    const currSize = elBall.offsetWidth
    if (currSize === 400) currSize = 50                
    
    const newSize = currSize + 50

    elBall.style.height = newSize + 'px'
    elBall.style.width = newSize + 'px'
}                                                                