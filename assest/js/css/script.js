
 document.getElementById("hide_button").addEventListener("click", function() {
    const navbar = document.getElementById("navbar");
    navbar.style.display = "none";
  });


  
const menyu = document.querySelector(".menyu")

menyu.addEventListener("click", function () {
const content = document.getElementById("content");
content.classList.toggle("show")
    
})