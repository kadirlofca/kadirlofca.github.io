function loadmore(){
    var i = 0;
    projectboxes.forEach(el => {
        if(i >= 3){
            return;
        }

        if(el.style.display == 'none'){
            el.style.display = 'block';
            i++;
        }
    });

    var noMore = true;
    projectboxes.forEach(el => {
        if(el.style.display == 'none'){
           noMore = false;
        }
    })

    if(noMore){
        document.getElementById('loadmore').style.display = 'none';
    }
}

const projectboxes = document.querySelectorAll('.projectbox');

projectboxes.forEach(el => {
    if(el.style.display == 'none'){
        document.getElementById('loadmore').style.display = 'inline';
    }
})