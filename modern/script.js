

"/ These code lines will take you /"
"/ to the top when you restart your browser/"

window.onbeforeunload = function () {
    window.scrollTo(0, 0); "/ 0, 0 is the top left (window)/"
}
