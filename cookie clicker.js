score = 0
function cookieclicker() {
    if (score <= 10) {
        score += 1
        localStorage.setItem('currentscore',score)
    }
    else {
        location.href = "cc2.html"
    }
}
