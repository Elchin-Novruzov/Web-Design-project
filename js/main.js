// Burger Menu Animation

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Toggle Nav
  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.4}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
  });
};

navSlide();

// Drop-down Menu Animation

(function($) {
  // Drastically modified from the function in the WordPress Twenty Fifteen theme
  // Original source: https://github.com/WordPress/WordPress/blob/master/wp-content/themes/twentyfifteen/js/functions.js

  $('.dropdown-toggle').click(function(e) {
    var _this = $(this);
    e.preventDefault();
    _this.toggleClass('toggle-on');
    _this
      .parent()
      .next('.sub-menu')
      .toggleClass('toggled-on');
    _this.attr(
      'aria-expanded',
      _this.attr('aria-expanded') === 'false' ? 'true' : 'false'
    );
    _this.html(
      _this.html() ===
        '<span class="screen-reader-text">Expand child menu</span>'
        ? '<span class="screen-reader-text">Collapse child menu</span>'
        : '<span class="screen-reader-text">Expand child menu</span>'
    );
  });
})(jQuery);

// Scroll to Top
$("a[href='#top']").click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});



/* memberships */
const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");
const purchaseButton = document.getElementById("purchaseButton");
const errorMessage = document.getElementById("errorMessage");

// Add event listener to the purchase button
purchaseButton.addEventListener("click", () => {
  // Get form field values
  const name = document.getElementById("nameField").value.trim();
  const month = document.getElementById("monthField").value.trim();
  const year = document.getElementById("yearField").value.trim();
  const card = document.getElementById("cardField").value.trim();
  const cvc = document.getElementById("cvcField").value.trim();

  // Clear any previous error message
  errorMessage.style.display = "none";
  errorMessage.textContent = "";

  // Validate fields
  if (!name || !month || !year || !card || !cvc) {
    errorMessage.textContent = "All fields are required. Please fill out the form completely.";
    errorMessage.style.display = "block";
    return;
  }

  if (!/^\d{2}$/.test(month) || parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
    errorMessage.textContent = "Invalid month. Please enter a valid two-digit month (01-12).";
    errorMessage.style.display = "block";
    return;
  }

  if (!/^\d{2}$/.test(year)) {
    errorMessage.textContent = "Invalid year. Please enter a valid two-digit year (e.g., 24).";
    errorMessage.style.display = "block";
    return;
  }

  if (!/^\d{16}$/.test(card)) {
    errorMessage.textContent = "Invalid card number. Please enter a 16-digit card number.";
    errorMessage.style.display = "block";
    return;
  }

  if (!/^\d{3}$/.test(cvc)) {
    errorMessage.textContent = "Invalid CVC. Please enter a 3-digit CVC.";
    errorMessage.style.display = "block";
    return;
  }

  // If everything is valid
  errorMessage.style.display = "none";
  alert("Purchase successful!");
});

// open popup 
openPopup1.addEventListener("click", () => {
  popupForm.style.display = "flex";
});
openPopup2.addEventListener("click", () => {
  popupForm.style.display = "flex";
});
openPopup3.addEventListener("click", () => {
  popupForm.style.display = "flex";
});

// Hide popup on close button click
closePopup.addEventListener("click", () => {
  popupForm.style.display = "none";
});

// Hide popup if clicked outside the popup content
window.addEventListener("click", (event) => {
  if (event.target === popupForm) {
    popupForm.style.display = "none";
  }
});

