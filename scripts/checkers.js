const board = document.querySelector(".board")

const newRedPiece = (id) => {
    return `
    <div id="${id}" class="redPiece"></div>
    `
}

const newBlackPiece = (id) => {
    return `
    <div id="${id}" class="blackPiece"></div>
    `
}

board.addEventListener("click", event => {
    if (event.target.id.startsWith("red")) {
        const originalSpot = event.target.id
        const checker = document.querySelector(`#${originalSpot}`)
        const box = checker.parentElement
        const originalSpotID = box.id.split("--")[1]
        console.log(originalSpot)
        board.addEventListener("click", event => {
            const newSpot = `${event.target.id}`
            const newQuery = document.querySelector(`#${newSpot}`)
            const newIdNumber = newSpot.split("--")[1]
            console.log(newIdNumber)
            if (event.target.classList.value === "white" && parseInt(originalSpotID) + 6 < parseInt(newIdNumber) && parseInt(newIdNumber) - parseInt(originalSpotID) < 10) {
            checker.parentNode.removeChild(checker)
            newQuery.innerHTML = newRedPiece(originalSpot)
            console.log(newSpot)
            }
        }) 
    }
})

board.addEventListener("click", event => {
    if (event.target.id.startsWith("black")) {
        const originalSpot = event.target.id
        const checker = document.querySelector(`#${originalSpot}`)
        const box = checker.parentElement
        const originalSpotID = box.id.split("--")[1]
        console.log(originalSpot)
        board.addEventListener("click", event => {
            const newSpot = `${event.target.id}`
            const newQuery = document.querySelector(`#${newSpot}`)
            const newIdNumber = newSpot.split("--")[1]
            if (event.target.classList.value === "white" && parseInt(originalSpotID) > parseInt(newIdNumber) + 6 && parseInt(originalSpotID) - parseInt(newIdNumber) < 10) {
            checker.parentNode.removeChild(checker)
            newQuery.innerHTML = newBlackPiece(originalSpot)
            console.log(newSpot)
            }
        }) 
    }
})



