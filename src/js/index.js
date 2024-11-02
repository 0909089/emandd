const backToTop = document.querySelector('#back-to-top');

window.onscroll = (e) => {

  if (window.scrollY > 150) {
    backToTop.classList.add('show');
  }else {
    backToTop.classList.remove('show');
  }

}

function closeMenuBar (e) {

  console.log("Clicked");

  e.setAttribute('data-bs-dismiss', 'offcanvas');
}