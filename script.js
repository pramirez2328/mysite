document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    // Check if the screen width is greater than 1055px
    if (window.innerWidth > 1055) {
      let scrollButtonDesktop = document.getElementById('scroller');
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollButtonDesktop.style.display = 'block';
      } else {
        scrollButtonDesktop.style.display = 'none';
      }
    } else {
      // If screen width is not greater than 1055px, always hide the button
      let scrollButtonMobile = document.getElementById('scroller');
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollButtonMobile.style.display = 'block';
      } else {
        scrollButtonMobile.style.display = 'none';
      }
    }
  }
});
