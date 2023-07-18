document.addEventListener('DOMContentLoaded', function() {
    // Text to type
    var text = "Jestem Dawberg z SoSmalStudio";
  
    // Get the typing-text element
    var typingText = document.querySelector('.typing-text');
  
    // Set the text content to empty initially
    typingText.textContent = '';
  
    // Function to start typing animation
    function startTypingAnimation() {
      var charIndex = 0;
      var typingInterval = setInterval(function() {
        typingText.textContent += text[charIndex];
        charIndex++;
  
        // Check if all characters have been typed
        if (charIndex === text.length) {
          clearInterval(typingInterval);
        }
      }, 50); // Typing speed in milliseconds
    }
  
    // Start the typing animation
    startTypingAnimation();
  });

  window.addEventListener('resize', function() {
    const navbar = document.getElementById('navbar');
    const navImg = document.getElementById('nav-img');
    const windowWidth = window.innerWidth;
    const maxWidth = window.screen.availWidth * 0.5;

    if (windowWidth <= maxWidth) {
        navbar.style.display = 'none';
        navImg.style.display = 'block';
    } else {
        navbar.style.display = 'flex';
        navImg.style.display = 'none';
    }
});

// Wywołanie funkcji przy załadowaniu strony
window.addEventListener('load', function() {
    window.dispatchEvent(new Event('resize'));
});

const imgWrappers = document.querySelectorAll('.img-wrapper');
    imgWrappers.forEach((wrapper) => {
      const img = wrapper.querySelector('img');
      const caption = wrapper.querySelector('.img-caption');
  
      img.addEventListener('mouseenter', () => {
        caption.style.visibility = 'visible';
      });
  
      img.addEventListener('mouseleave', () => {
        caption.style.visibility = 'hidden';
      });
    });

// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");

//setting up the listener
bars.addEventListener("click", barClicked, false);

//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}