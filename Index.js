// JavaScript source code
document.addEventListener('DOMContentLoaded', function(){
    var altura = document.getElementById('navBar').clientHeight
    document.getElementById('lay1').style.height = document.getElementById('hiper').clientHeight - altura + "px"
    document.getElementById('lay1').style.top = `${altura}px`

    window.addEventListener('resize', function() {
    document.getElementById('lay1').style.height = document.getElementById('hiper').clientHeight - altura + "px"
    document.getElementById('lay1').style.top = `${altura}px`
    });

})


