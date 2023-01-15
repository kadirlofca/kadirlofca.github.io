function flipflop(name){
    let flippy = document.getElementById(name + "gallery");
    let floppy = document.getElementById(name + "description");
    let tabby = document.getElementById(name + "tab");
    
    let flipflop = flippy.style.display == 'none';
    floppy.style.display = flipflop ? 'none' : 'flex'
    tabby.style.display = flipflop ? 'none' : 'flex'
    flippy.style.display = flipflop ? 'flex' : 'none'

    resetothers(name);
    goto(name);
}

const galleries = Array(
    'vrresearch',
    'about',
    'slicedice',
    'magnolia',
    'hackncworkshop'
);

function resetothers(name){
    galleries.forEach(el => {
        if(el != name){
            document.getElementById(el + "description").style.display = 'none';
            document.getElementById(el + "tab").style.display = 'none';
            document.getElementById(el + "gallery").style.display = 'flex';                
        }
    });
}

function goto(name){
    document.getElementById(name + "description").scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
}