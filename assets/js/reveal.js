const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('revealed');
        }
        else{
            entry.target.classList.remove('revealed');
        }
    });
});

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));