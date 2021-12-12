const accordion = document.getElementsByClassName('accordion-item');

for (i = 0; i < accordion.length; i++) {
  let eachItem = accordion[i];
  eachItem.addEventListener('click', function () {
    eachItem.classList.toggle('active');
  });
}
