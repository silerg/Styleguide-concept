/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

/*===test===*/
  var acc = document.getElementsByClassName("nav__dropdown");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("sublistactive");
      var nav__dropdown__collapse = this.nextElementSibling;
      if (nav__dropdown__collapse.style.maxHeight) {
        nav__dropdown__collapse.style.maxHeight = null;
      } else {
        nav__dropdown__collapse.style.maxHeight = nav__dropdown__collapse.scrollHeight + "px";
      } 
      
    });
  }

/*=======dark mode toggle======*/
const dark_mode_toggle = document.querySelector('.toggle-dark-mode');
		dark_mode_toggle.addEventListener('click', function(e) {
			e.preventDefault();
			document.querySelector('.faithlifebase_unity').classList.toggle('dark-mode');
			return false;
		});

    