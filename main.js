// Detect when the skill bar is in view
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Handle the scroll event
  function onScroll() {
    var skillBar = document.querySelector('.skill-bar');;
    var skillper = document.getElementsByClassName('skill-per');
  
    // If the skill bar html is in view, add animation

    if (isElementInViewport(skillBar)) {
        for (var i = 0; i < skillper.length; i++) {
            var each_bar = skillper[i];
            each_bar.style.animation = 'progress 1s ease-in-out forwards';
        }
  
        // Unbind the scroll event handler once the animation is triggered
        window.removeEventListener('scroll', onScroll);
    }
  }
  
  // Bind the scroll event handler
  window.addEventListener('scroll', onScroll);
  