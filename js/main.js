'use strict'

function onBallClick(elBall) {
    const currWidth = elBall.offsetWidth
    const currHeight = elBall.offsetHeight
    
    const newHeight = currHeight + 50
    const newWidth = currWidth + 50

    elBall.style.height = newHeight + 'px'
    elBall.style.width = newWidth + 'px'
}                                                                