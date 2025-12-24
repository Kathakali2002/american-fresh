// Get the modal element
const modal = document.getElementById('login-modal');

// Get the button that opens the modal
const btn = document.getElementById('buttona');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close-btn')[0];

// 1. When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// 2. When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// 3. When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
