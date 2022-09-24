let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScoreCount = 0
let guestScoreCount = 0

function homeScoreOne() {
    homeScoreCount += 1
    homeScoreEl.textContent = homeScoreCount
}

function homeScoreTwo() {
    homeScoreCount += 2
    homeScoreEl.textContent = homeScoreCount
}

function homeScoreThree() {
    homeScoreCount += 3
    homeScoreEl.textContent = homeScoreCount
}

function guestScoreOne() {
    guestScoreCount += 1
    guestScoreEl.textContent = guestScoreCount
}

function guestScoreTwo() {
    guestScoreCount += 2
    guestScoreEl.textContent = guestScoreCount
}

function guestScoreThree() {
    guestScoreCount += 3
    guestScoreEl.textContent = guestScoreCount
}

function newGame() {
    homeScoreCount = 0
    guestScoreCount = 0
    homeScoreEl.textContent = homeScoreCount
    guestScoreEl.textContent = guestScoreCount

}