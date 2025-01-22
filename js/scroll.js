// SCROLL
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  const headerBurgerBtn = document.querySelector('.header_burger-btn')
  const nav  = document.querySelector('.nav')
  const header  = document.querySelector('.header')


  const btn = document.querySelector('.section-contacts__form-btn')
  const capcha = document.querySelector('.g-recaptcha')

// btn.onclick = (event) => {
//      console.log(capcha)
//     if(checkbox.checked) {
        
//     } else {
//         event.preventDefault();
//     }

// }
  
  
