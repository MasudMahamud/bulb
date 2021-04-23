

document.getElementById("show").addEventListener("click", function() {
    document.getElementById("light-show").style.display = 'block';
    document.getElementById("light-hide").style.display = 'none';
    console.log("click");

})


document.getElementById("hide").addEventListener("click", function() {
    document.getElementById("light-hide").style.display = 'block';
    document.getElementById("light-show").style.display = 'none';

})