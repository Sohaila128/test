//===== Back to top =====//
//Get the button
let mybutton = document.querySelector(".btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

new Swiper(".gallery-slider", {
  // Your existing Swiper configuration
  speed: 400,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});


const inputWrappers = document.querySelectorAll('.input-wrapper');

inputWrappers.forEach(inputWrapper => {
  const incrementButton = inputWrapper.querySelector('.increment');
  const decrementButton = inputWrapper.querySelector('.decrement');
  const quantityInput = inputWrapper.querySelector('.quantity');

  incrementButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  decrementButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  });
});

function openModalWithDelay() {
  setTimeout(function() {
      document.getElementById('myModal').style.display = 'block';
  }, 2000); 
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
  // Change heart icon on hover
  var heartIcons = document.querySelectorAll('.heartIcon');

  heartIcons.forEach(function(icon) {
      icon.addEventListener('mouseover', function() {
          icon.classList.remove('bi-heart');
          icon.classList.add('bi-heart-fill');
      });

      icon.addEventListener('mouseout', function() {
          icon.classList.remove('bi-heart-fill');
          icon.classList.add('bi-heart');
      });
  });
});

