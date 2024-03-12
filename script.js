function openSearchPopup() {
    document.getElementById("searchPopup").style.display = "block";
  }
  
  function closeSearchPopup() {
    document.getElementById("searchPopup").style.display = "none";
  }
  
  function submitSearch() {
    // Your search submission logic here
  }
  // Function to animate text elements
function animateText() {
    const title = document.getElementById('heroTitle');
    const text = document.getElementById('heroText');
    const btn = document.querySelector('.btn');
  
    title.style.opacity = '1';
    text.style.opacity = '1';
    btn.style.opacity = '1';
  }
  
  // Call the animation function after a delay
  setTimeout(animateText, 2000); // Adjust the delay time as needed
// With jQuery
$(document).ready(function() {
  $('.animated-text').fadeIn(2000); // Example animation
  $('.animated-paragraph').slideDown(2000); // Example animation
});

// Without jQuery
document.addEventListener('DOMContentLoaded', function() {
  const text = document.querySelector('.animated-text');
  const paragraph = document.querySelector('.animated-paragraph');
  
  // Example animation
  text.style.opacity = 0;
  paragraph.style.opacity = 0;

  const fadeIn = function(element) {
      let opacity = 0;
      const timer = setInterval(function() {
          if (opacity >= 1) {
              clearInterval(timer);
          }
          element.style.opacity = opacity;
          opacity += 0.1;
      }, 200);
  };

  fadeIn(text);
  fadeIn(paragraph);
});
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.animated-text'); // Select all elements with the 'animated-text' class

  // Function to sequentially show elements with a delay
  function showElements() {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = 1; // Set opacity to 1 to reveal the element
      }, 1000 * index); // Set a delay of 1 second multiplied by the index to stagger the animation
    });
  }

  // Call the function to show elements after a delay
  setTimeout(showElements, 1000); // Delay execution of the function by 1 second
});
