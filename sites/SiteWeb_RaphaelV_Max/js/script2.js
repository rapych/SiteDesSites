const tiltSettings = {
  max: 20,
  speed: 400,
  scale: 1.1,
}


function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

function popUp(element) {
  // Create a new div that will act as the blurry background
  let blurDiv = document.createElement('div');
  blurDiv.id = ('blurry-background');
  blurDiv.onclick = () => popDown(element);
  document.body.appendChild(blurDiv);

  //Timeout to use transition
  setTimeout((e) => {
    blurDiv.style.backdropFilter = 'blur(10px)'
  }, 1)

  // Disable scrolling
  document.body.style.overflowX = 'hidden';
  
  element.vanillaTilt.destroy();

  element.classList.add('popup');

  // Prevent the card from being clicked
  element.onclick = null;
}

function popDown(element) {
  blurDiv = document.querySelector('#blurry-background')

  //Prevent the div from being clicked
  blurDiv.onclick = null;

  // Remove the blurry background (with a transition)
  blurDiv.style.backdropFilter = 'blur(0px)'
  setTimeout((e) => {
    document.querySelector('#blurry-background').remove();
  }, 500)
  element.classList.remove('popup');

  // Enable scrolling
  document.body.style.overflowX = 'auto';
  // Re-enable the tilt effect
  VanillaTilt.init(element, tiltSettings);

  // Re-enable the card
  element.onclick = () => popUp(element);
}


VanillaTilt.init(document.querySelectorAll(".circuit-card"), tiltSettings)
