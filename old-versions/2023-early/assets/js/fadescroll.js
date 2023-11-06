const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting && entry.target.classList.contains('fade-hidden')){
        entry.target.classList.add('fade-show')
      }  
      else if(!entry.isIntersecting){
        entry.target.classList.remove('fade-show')
      }
    })
});

const hiddenElements = document.querySelectorAll('.fade-hidden');
hiddenElements.forEach((el) => {    
    observer.observe(el);
});
