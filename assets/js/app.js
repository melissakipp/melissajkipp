const menuToggle = document.querySelector('#menuBtn')

menuToggle.addEventListener('click', () => {
  console.log('Open')
  document.querySelector('#topNav').hidden = false;
  document.querySelector('#menuBtn').hidden = true;
}, true);
