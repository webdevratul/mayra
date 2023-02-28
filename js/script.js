 // get ID navlinks
 let navLinks = document.getElementById("navlist");
     
 navLinks.style.right = "1000px";
  // Toggle menu
  function toggleMenu() {
     if (navLinks.style.right == "1000px") {
         navLinks.style.right = "0";
     } else {
         navLinks.style.right = "1000px";
     }
  }
