document.querySelector('.header__moon').onclick = function() {  //Returns the header_moon class element and specifies it to perform a function when the button is clicked
    document.querySelector('body').classList.toggle('is-black'); //Returns the element body and toggles it according to the "is-black" element specifications
}

document.querySelector('.header__mob-menu').onclick = function() {
    document.querySelector('.header-menu').classList.toggle('is-active');
}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

